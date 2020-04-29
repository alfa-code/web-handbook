export const assetsRoutePlugin = {
    name: 'assetsRoutePlugin',
    version: '1.0.0',
    register: async function (server, options) {
        server.route({
            method: 'GET',
            path: '/assets/{param*}',
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
