import { getContent } from 'Src/server/content';

export const adminRoutePlugin = {
    name: 'adminRoutePlugin',
    version: '1.0.0',
    register: async function (server, options) {
        server.route({
            method: 'GET',
            path: '/admin/{optionalPath?}',
            options,
            handler: function (request) {
                return getContent(request);
            }
        });
    }
};
