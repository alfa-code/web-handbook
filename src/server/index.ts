import { getContent } from './content';

import * as fs from 'fs';

const path = require('path');

const Hapi = require('@hapi/hapi');
const Inert = require('@hapi/inert');

const rootPath = process.cwd();

const HTTPS_PORT = 443;
const HTTP_PORT = 80;
const HOST = '0.0.0.0';

const httpServer = new Hapi.Server({
    port: HTTP_PORT,
    host: HOST,
});

const httpsServer = new Hapi.Server({
    port: HTTPS_PORT,
    host: HOST,
    routes: {
        files: {
            relativeTo: path.join(rootPath, '.build/', 'assets/'),
        },
    },
    tls: {
        /* tslint:disable-next-line */
        key: fs.readFileSync(path.join(rootPath,  '.build/tls/', 'private.key')),
        /* tslint:disable-next-line */
        cert: fs.readFileSync(path.join(rootPath,  '.build/tls/', 'certificate.crt'))
    }
});

const init = async () => {
    await httpsServer.register(Inert);

    // Two temporary responses for checking Domain owner (Let's Encrypt)

    // httpServer.route({
    //     method: 'GET',
    //     path: '/.well-known/acme-challenge/iweHfm-OuizKLNNWvMSII9k2bj2Kf7NhW2KNOrvsTR4',
    //     handler: function (request, reply) {
    //         const data = fs.readFileSync(path.join(rootPath,  '/.build/.well-known/acme-challenge/iweHfm-OuizKLNNWvMSII9k2bj2Kf7NhW2KNOrvsTR4'));
    //         const response = reply.response(data);
    //         response.type('text/plain');
    //         return response;
    //     }
    // });

    // httpServer.route({
    //     method: 'GET',
    //     path: '/.well-known/acme-challenge/3P-jCiUGv8kcDUX7u4mmN56BKfoDcL6zd4vFcJbVYlI',
    //     handler: function (request, reply) {
    //         const data = fs.readFileSync(path.join(rootPath,  '/.build/.well-known/acme-challenge/3P-jCiUGv8kcDUX7u4mmN56BKfoDcL6zd4vFcJbVYlI'));
    //         const response = reply.response(data);
    //         response.type('text/plain');
    //         return response;
    //     }
    // });

    // Redirect all requests from port 80 to port 443
    httpServer.route({
        method: '*',
        path: '/{any*}',
        handler: function (request, reply) {
            return reply.redirect(`https://${request.url.host}${request.url.pathname}${request.url.search}`);
        }
    });

    //   httpsServer.route({
    //     method: '*',
    //     path: '/{any*}',
    //     handler: () => '404 Error! Page Not Found!',
    //   });

    httpsServer.route({
        method: '*',
        path: '/{any*}',
        handler: (request) => {
            return getContent(request);
        }
    });

    httpsServer.route({
        method: 'GET',
        path: '/',
        handler: (request) => {
            return getContent(request);
        },
    });

    // server.route({
    //     method: 'GET',
    //     path: '/auth',
    //     handler: (request) => {
    //         return getContent(request);
    //     },
    // });

    httpsServer.route({
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

    await httpsServer.start();
    await httpServer.start();
    // eslint-disable-next-line no-console
    console.log('HTTPS Server running on %s', httpsServer.info.uri, `development (http://localhost:${HTTPS_PORT})`);
    console.log('HTTP Server running on %s', httpServer.info.uri, `development (http://localhost:${HTTP_PORT})`);
};

process.on('unhandledRejection', (err) => {
    // eslint-disable-next-line no-console
    console.log(err);
    process.exit(1);
});

init();
