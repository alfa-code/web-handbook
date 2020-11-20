import { getContent } from 'Src/server/content';

export const anyRoutePlugin = {
    name    : 'anyRoutePlugin',
    version : '1.0.0',
    register: async function (server, options = {}) {
        server.route({
            method : '*',
            path   : '/{any*}',
            options,
            handler: async function (request) {
                return await getContent(request);
            }
        });
    }
};
