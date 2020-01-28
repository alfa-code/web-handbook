import { getContent } from './content';

const path = require('path');

const Hapi = require('@hapi/hapi');
const Inert = require('@hapi/inert');
const HapiErrorPlugin = require('hapi-error');
const HapiAuthJWT2 = require('hapi-auth-jwt2');

const jwt = require('jsonwebtoken');
const algorithm = 'HS256';
const privateKey = 'secret'; // just for test

const rootPath = process.cwd();

const SERVER_PORT = 3000;
const HOST = '0.0.0.0';

const peopleDB = { // our "users database"
    1: {
        id: 1,
        login: 'test',
        password: '1234'
    },
    2: {
        id: 2,
        login: 'test2',
        password: '1234'
    }
};

function checkUser(login, password): any {
    const usersArray = Object.values(peopleDB);
    const foundUser = usersArray.find((item: any) => {
        return (item.login === login) && (item.password && password);
    });
    return foundUser;
}

// bring your own validation function
const validateJwtData = async function (decoded): Promise<{ isValid: boolean }>  {
    // do your checks to see if the person is valid
    if (!peopleDB[decoded.id]) {
        // return h(new Error('500'));
        return { isValid: false };
    } else {
        return { isValid: true };
    }
};

const httpServer = new Hapi.Server({
    port: SERVER_PORT,
    host: HOST,
    routes: {
        files: {
            relativeTo: path.join(rootPath, '.build/', 'assets/'),
        },
    }
});

const init = async (): Promise<any> => {
    await httpServer.register(Inert);

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
        key: privateKey, // 'NeverShareYourSecret'
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

    // user login validation endpoint
    httpServer.route({
        method: 'POST',
        path: '/auth/validate',
        options: {
            auth: false,
        },
        handler: (request, h) => {
            // без проверки логина и пароля
            const { login, password } = request.payload;
            let foundUser;
            if (login && password) {
                foundUser = checkUser(login, password);
            }
            if (!foundUser) {
                return h.response('Ошибка ввода данных или такого пользователя не существует!');
            }

            // generate jwt token by user data
            const token = jwt.sign({ id: foundUser.id, login: foundUser.login }, privateKey, { algorithm });

            // set the jwt token cookie
            h.state('token', token, {
                SameSite: 'None',
                isSecure: false,
                isHttpOnly: false,
                ttl: 1000 * 60 * 60, // one hour
                path: '/',
            });

            // send response
            return h.redirect('/cabinet');
        }
    });

    httpServer.route({
        method: 'GET',
        path: '/cabinet',
        options: {
            auth: 'jwt',
        },
        handler: (request, h) => {
            return h.response('Личный кабинет');
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

    await httpServer.start();
    // eslint-disable-next-line no-console
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
