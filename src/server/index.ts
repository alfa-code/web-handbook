import { getContent } from './content';

const path = require('path');

const Hapi = require('@hapi/hapi');
const Inert = require('@hapi/inert');

const rootPath = process.cwd();

const SERVER_PORT = 3000;
const HOST = '0.0.0.0';

const httpServer = new Hapi.Server({
    port: SERVER_PORT,
    host: HOST,
    routes: {
        files: {
            relativeTo: path.join(rootPath, '.build/', 'assets/'),
        },
    }
});

const init = async () => {
    await httpServer.register(Inert);

    httpServer.route({
        method: '*',
        path: '/{any*}',
        handler: (request) => {
            return getContent(request);
        }
    });

    httpServer.route({
        method: 'GET',
        path: '/',
        handler: (request) => {
            return getContent(request);
        },
    });

    httpServer.route({
        method: 'GET',
        path: '/assets/{param*}',
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
    console.log('HTTPS Server running on %s', httpServer.info.uri, `development (http://localhost:${SERVER_PORT})`);
};

process.on('unhandledRejection', (err) => {
    // eslint-disable-next-line no-console
    console.log(err);
    process.exit(1);
});

init();
