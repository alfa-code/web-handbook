import jwt from 'jsonwebtoken';
import HapiAuthJWT2 from 'hapi-auth-jwt2';
import Hapi from '@hapi/hapi'
import Inert from '@hapi/inert';

import path from 'path';

import HapiPostgresConnection from 'hapi-postgres-connection';

import { JWT_SECRET_KEY } from 'Src/constants/env-variables';
import { getServerPlugins } from 'Src/server/utils/get-server-plugins';

// jwt info
const algorithm = 'HS256';
const jwtPrivateKey = process.env[JWT_SECRET_KEY]

// app root path
const rootPath = process.cwd();

// server info
const SERVER_PORT = 3000;
const SERVER_HOST = '0.0.0.0';

const validateJwtData = async function (): Promise<{ isValid: boolean }>  {
    // If token is correct - is not necessary
    return { isValid: true };
};

// @ts-ignore
const server = new Hapi.Server({
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
    await server.register(Inert);

    await server.register(HapiAuthJWT2);

    await server.register({
        plugin: HapiPostgresConnection
    });

    server.auth.strategy('jwt', 'jwt', {
        key: jwtPrivateKey,
        validate: validateJwtData,
        verifyOptions: {
            algorithm,
            cookieKey: 'token'
        }
    });
    server.auth.default('jwt');

    const plugins = getServerPlugins();
    await server.register(plugins);

    // user registration endpoint
    server.route({
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
                const result: any = await request.pg.client.query(checkUserSQL);


                if (result.rowCount === 0) {
                    const addUserSQL =
                        `INSERT INTO accounts(username, password, rights) VALUES (${login}, ${password}, 'user');`;

                    await request.pg.client.query(addUserSQL);

                    // const resultAfterRegistration: any = await createSQLRequest(pgClient, checkUserSQL);
                    const resultAfterRegistration: any = await request.pg.client.query(checkUserSQL);

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
            }
        }
    });

    // user login validation endpoint
    server.route({
        method: 'POST',
        path: '/api/auth/login',
        options: {
            auth: false,
        },
        handler: async (request, h) => {
            const { login, password } = request.payload;

            //let foundUser;
            if (login && password) {
                // eslint-disable-next-line
                const sql = `SELECT user_id, username, rights FROM accounts WHERE username = '${login}' AND password = '${password}'`;
                // const result: any = await createSQLRequest(pgClient, sql);
                const result = await request.pg.client.query(sql);

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
                } else {
                    return h.response({
                        type: 'error',
                        message: 'Ошибка ввода данных или такого пользователя не существует!'
                    });
                }
            }
        }
    });

    server.route({
        method: 'POST',
        path: '/api/postgre/request',
        options: {
            auth: 'jwt',
        },
        handler: async (request, h) => {
            const { sql = '' } = request.payload;

            const result = await request.pg.client.query(sql);

            return h.response(JSON.stringify(result));
        }
    });

    await server.start();

    return server;
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
