import { getContent } from './content';

const path = require('path');

const Hapi = require('@hapi/hapi');
const Inert = require('@hapi/inert');

const rootPath = process.cwd();

const server = new Hapi.Server({
  port: 3000,
  host: 'localhost',
  routes: {
    files: {
      relativeTo: path.join(rootPath, '.dist/', 'assets/'),
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
    handler: () => getContent(),
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
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  // eslint-disable-next-line no-console
  console.log(err);
  process.exit(1);
});

init();
