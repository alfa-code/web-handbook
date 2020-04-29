import { getContent } from 'Src/server/content';

export const postgreRoutePlugin = {
    name: 'postgreRoutePlugin',
    version: '1.0.0',
    register: async function (server, options) {
        server.route({
            method: 'GET',
            path: '/postgre',
            options,
            handler: function (request) {
                return getContent(request);
            }
        });
    }
};
