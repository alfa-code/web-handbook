import { getContent } from './content';

const path = require('path');

const Hapi = require('@hapi/hapi');
const Inert = require('@hapi/inert');

const rootPath = process.cwd();

const PORT = 80;

const server = new Hapi.Server({
  port: PORT,
  host: '0.0.0.0',
  routes: {
    files: {
      relativeTo: path.join(rootPath, '.build/', 'assets/'),
    },
  },
});

const init = async () => {
  await server.register(Inert);

  server.route({
    method: '*',
    path: '/{any*}',
    handler: () => '404 Error! Page Not Found!',
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: () => {
        return getContent();
    },
  });

  server.route({
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

  await server.start();
  // eslint-disable-next-line no-console
  console.log('Server running on %s', server.info.uri, `development (http://localhost:${PORT})`);
};

process.on('unhandledRejection', (err) => {
  // eslint-disable-next-line no-console
  console.log(err);
  process.exit(1);
});

init();
