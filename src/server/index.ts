import HapiAuthJWT2 from 'hapi-auth-jwt2';
import Hapi from '@hapi/hapi'
import Inert from '@hapi/inert';
import path from 'path';

import { jwtAlgorithm } from 'Src/constants/jwt';
import { JWT_SECRET_KEY } from 'Src/constants/env-variables';
import { getServerPlugins } from 'Src/server/utils/get-server-plugins';

import { SequelizeConnectPlugin } from 'Src/server/plugins/sequelize-connect';

import { ormModels } from 'Src/server/models';

// app root path
const rootPath = process.cwd();

// server info
const SERVER_PORT = 3000;
const SERVER_HOST = '0.0.0.0';

const validateJwtData = async function (decoded, request): Promise<{ isValid: boolean }>  {
    const { path } = request;
    const { rights } = decoded;

    switch (true) {
        case (/admin/.test(path)): {
            if (rights && rights !== 'admin') {
                return { isValid: false };
            }
            return { isValid: true };
        }
        default: {
            return { isValid: true };
        }
    }
};

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

    // Регистрируем аутентификационную схему - ее имя 'jwt'
    await server.register(HapiAuthJWT2);

    // Регистрируем стратегию jwt - схема для нее jwt
    server.auth.strategy('jwt', 'jwt', {
        key: process.env[JWT_SECRET_KEY],
        validate: validateJwtData,
        verifyOptions: {
            algorithm: jwtAlgorithm,
            cookieKey: 'token',
            ignoreExpiration: true
        }
    });

    // Устанавливаем стратегию по умолчанию
    server.auth.default('jwt');

    // Подключаем ORM - передаем массив моделей
    await server.register({
        plugin: SequelizeConnectPlugin,
        options: {
            models: ormModels
        }
    })

    const plugins = getServerPlugins();
    await server.register(plugins);
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
