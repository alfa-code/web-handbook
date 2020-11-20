// import HapiAuthJWT2 from 'hapi-auth-jwt2';
import Hapi from '@hapi/hapi'
import path from 'path';

import { getServerPlugins } from 'Src/server/utils/get-server-plugins';

// app root path
const rootPath = process.cwd();

// server info
const SERVER_PORT = 3000;
const SERVER_HOST = '0.0.0.0';

const server = new Hapi.Server({
    port  : SERVER_PORT,
    host  : SERVER_HOST,
    routes: { files: { relativeTo: path.join(rootPath, '.build/', 'assets/'), }, },
    state : {
        strictHeader: true,
        ignoreErrors: false,
        isSecure    : false,
        isHttpOnly  : true,
        isSameSite  : 'Lax',
        encoding    : 'none'
    }
});

const init = async (): Promise<any> => {
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
