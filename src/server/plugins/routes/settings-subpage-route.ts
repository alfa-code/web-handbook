import { getContent } from 'Src/server/content';

export const settingsSubpageRoutePlugin = {
    name: 'settingsSubpageRoutePlugin',
    version: '1.0.0',
    register: async function (server, options) {
        server.route({
            method: 'GET',
            path: '/settings/{subpage*}',
            options,
            handler: function (request) {
                return getContent(request);
            }
        });
    }
};
