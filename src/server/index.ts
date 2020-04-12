import jwt from 'jsonwebtoken';

import Hapi from '@hapi/hapi'
import Inert from '@hapi/inert';
import HapiAuthJWT2 from 'hapi-auth-jwt2';
import HapiErrorPlugin from 'hapi-error';

import { getContent } from './content';
import { createPGClient } from './db/postgresql';

import { JWT_SECRET_KEY } from '../constants/env-variables';

import path from 'path';
// const path = require('path');

// jwt info
const algorithm = 'HS256';
const jwtPrivateKey = process.env[JWT_SECRET_KEY]

// app root path
const rootPath = process.cwd();

// server info
const SERVER_PORT = 3000;
const SERVER_HOST = '0.0.0.0';

// eslint-disable-next-line
async function createSQLRequest(pgClient, sqlCommand: string) {
    const result = await new Promise((resolve, reject) => {
        try {
            pgClient.query(sqlCommand, (err, respons) => {
                if (err) {
                    throw err;
                }
                resolve(respons);
            })
        } catch(e) {
            const errorMessage = 'Не удалось выпольнить SQL запрос.';
            console.log(errorMessage, 'Error: ', e);
            reject(errorMessage);
        }
    });
    return result;
}

const validateJwtData = async function (): Promise<{ isValid: boolean }>  {
    // If token is correct - is not necessary
    return { isValid: true };
};


// @ts-ignore
const httpServer = new Hapi.Server({
    port: SERVER_PORT,
    host: SERVER_HOST,
    routes: {
        files: {
            relativeTo: path.join(rootPath, '.build/', 'assets/'),
        },
    },
    state: {
        strictHeader: true,
        ignoreErrors: false,
        isSecure: false,
        isHttpOnly: true,
        isSameSite: 'Lax',
        encoding: 'none'
    }
});

const init = async (): Promise<any> => {
    await httpServer.register(Inert);

    const pgClient = createPGClient();
    pgClient.connect();

    await httpServer.register({
        plugin: HapiErrorPlugin,
        options: {
            statusCodes: {
                '401': {
                    'redirect': function (): string {
                        return '/auth'
                    }
                }
            }
        }
    });

    await httpServer.register(HapiAuthJWT2);
    httpServer.auth.strategy('jwt', 'jwt', {
        key: jwtPrivateKey,
        validate: validateJwtData,
        verifyOptions: {
            algorithm,
            cookieKey: 'token'
        }
    });
    httpServer.auth.default('jwt');

    httpServer.route({
        method: '*',
        path: '/{any*}',
        options: {
            auth: false
        },
        handler: (request) => {
            return getContent(request);
        }
    });

    httpServer.route({
        method: 'GET',
        path: '/auth',
        options: {
            auth: false,
        },
        handler: (request) => {
            return getContent(request);
        },
    });

    httpServer.route({
        method: 'GET',
        path: '/settings/{subpage*}',
        options: {
            auth: 'jwt',
        },
        handler: (request) => {
            return getContent(request);
        }
    });

    httpServer.route({
        method: 'GET',
        path: '/postgre',
        options: {
            auth: 'jwt',
        },
        handler: (request) => {
            return getContent(request);
        }
    });

    httpServer.route({
        method: 'GET',
        path: '/logout',
        options: {
            auth: false,
        },
        handler: (request, h) => {
            return h.redirect('/').state('token', '');
        }
    });

    httpServer.route({
        method: 'GET',
        path: '/assets/{param*}',
        options: {
            auth: false
        },
        handler: {
            directory: {
                path: '.',
                redirectToSlash: true,
                index: true,
            },
        },
    });

    // user registration endpoint
    httpServer.route({
        method: 'POST',
        path: '/api/auth/registration',
        options: {
            auth: false,
        },
        handler: async (request, h) => {
            const { login, password } = request.payload;

            //let foundUser;
            if (login && password) {
                const checkUserSQL = `SELECT user_id, username, rights FROM accounts WHERE username = '${login}'`;
                const result: any = await createSQLRequest(pgClient, checkUserSQL);

                if (result.rowCount === 0) {
                    const addUserSQL =
                        `INSERT INTO accounts(username, password, rights) VALUES (${login}, ${password}, 'user');`;
                    await createSQLRequest(pgClient, addUserSQL);

                    const resultAfterRegistration: any = await createSQLRequest(pgClient, checkUserSQL);

                    if (resultAfterRegistration.rowCount === 1) {
                        const { user_id: userId, username, rights } = resultAfterRegistration.rows[0];

                            // generate jwt token by user data
                            const token = jwt.sign({ userId, username, rights }, jwtPrivateKey, { algorithm });

                            // set the jwt token cookie
                            h.state('token', token, {
                                SameSite: 'Lax',
                                isSecure: false,
                                isHttpOnly: false,
                                ttl: 1000 * 60 * 60, // one hour
                                path: '/',
                            });

                            // send response
                            // return h.redirect('/settings');

                            return h.response({
                                type: 'success',
                                message: 'Вы успешно зарегистрированы!',
                                redirectTo: '/settings'
                            })
                    }
                } else {
                    return h.response({
                        type: 'error',
                        message: 'Пользователь с таким логином уже существует!'
                    });
                }

                // if (result.rowCount === 1) {
                //     const { user_id: userId, username, rights } = result.rows[0]

                //     // generate jwt token by user data
                //     const token = jwt.sign({ userId, username, rights }, jwtPrivateKey, { algorithm });

                //     // set the jwt token cookie
                //     h.state('token', token, {
                //         SameSite: 'None',
                //         isSecure: false,
                //         isHttpOnly: false,
                //         ttl: 1000 * 60 * 60, // one hour
                //         path: '/',
                //     });

                //     // send response
                //     return h.redirect('/settings');
                // } else {
                //     return h.response('Ошибка ввода данных или такого пользователя не существует!');
                // }
            }
        }
    });

    // user login validation endpoint
    httpServer.route({
        method: 'POST',
        path: '/api/auth/login',
        options: {
            auth: false,
        },
        handler: async (request, h) => {
            const { login, password } = request.payload;

            //let foundUser;
            if (login && password) {
                const sql = `SELECT user_id, username, rights FROM accounts WHERE username = '${login}' AND password = '${password}'`;
                const result: any = await createSQLRequest(pgClient, sql);

                if (result.rowCount === 1) {
                    const { user_id: userId, username, rights } = result.rows[0]

                    // generate jwt token by user data
                    const token = jwt.sign({ userId, username, rights }, jwtPrivateKey, { algorithm });

                    // set the jwt token cookie
                    h.state('token', token, {
                        SameSite: 'Lax',
                        isSecure: false,
                        isHttpOnly: false,
                        ttl: 1000 * 60 * 60, // one hour
                        path: '/',
                    });

                    return h.response({
                        type: 'success',
                        message: 'Вы успешно аутентифицированы!',
                        redirectTo: '/settings'
                    })

                    // send response
                    // return h.redirect('/settings');
                } else {
                    return h.response({
                        type: 'error',
                        message: 'Ошибка ввода данных или такого пользователя не существует!'
                    });
                }
            }
        }
    });

    httpServer.route({
        method: 'POST',
        path: '/api/postgre/request',
        options: {
            auth: 'jwt',
        },
        handler: async (request, h) => {
            const { sql = '' } = request.payload;

            const result = await createSQLRequest(pgClient, sql);

            return h.response(JSON.stringify(result));
        }
    });

    await httpServer.start();

    return httpServer;
};

process.on('unhandledRejection', (err) => {
    // eslint-disable-next-line no-console
    console.log(err);
    process.exit(1);
});

// Server start
init().then(server => {
    console.log('Server running at:', server.info.uri, `port: ${SERVER_PORT}`);
}).catch(err => {
    console.log(err);
});
