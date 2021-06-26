export const assetsRoutePlugin = {
    name: 'assetsRoutePlugin',
    version: '1.0.1',
    register: async function (server, options) {
        server.route({
            method: 'GET',
            path: '/static/{param*}',
            options,
            handler: {
                directory: {
                    path: '.',
                    redirectToSlash: true,
                    index: true,
                },
            },
        });
    }
};
