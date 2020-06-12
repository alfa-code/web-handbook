import { getContent } from 'Src/server/content';

export const blogRoutePlugin = {
    name: 'blogRoutePlugin',
    version: '1.0.0',
    register: async function (server, options) {
        server.route({
            method: 'GET',
            path: '/blog',
            options,
            handler: function (request) {
                return getContent(request);
            }
        });
    }
};
