import { getContent } from 'Src/server/content';

export const settingsSubpageRoutePlugin = {
    name: 'settingsSubpageRoutePlugin',
    version: '1.0.0',
    register: async function (server, options) {
        server.route({
            method: 'GET',
            path: '/profile/{subpage*}',
            options,
            handler: async function (request) {
                return await getContent(request);
            }
        });
    }
};
