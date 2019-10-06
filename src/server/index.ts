import Hapi from '@hapi/hapi';

import { getContent } from './content';

const server = Hapi.server({
    port: 3000,
    host: 'localhost'
});

server.route({
    method: 'GET',
    path: '/',
    handler: () => {
        return getContent();
    }
});

const init = async () => {
    await server.start();
    // eslint-disable-next-line no-console
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    // eslint-disable-next-line no-console
    console.log(err);
    process.exit(1);
});

init();
