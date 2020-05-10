import { getContent } from 'Src/server/content';

export const authRoutePlugin = {
    name: 'authRoutePlugin',
    version: '1.0.0',
    register: async function (server, options) {
        server.route({
            method: 'GET',
            path: '/auth',
            options,
            handler: function (request) {
                return getContent(request);
            }
        });
    }
};