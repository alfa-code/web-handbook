export const logoutPlugin = {
    name: 'logoutPlugin',
    version: '1.0.0',
    register: async function (server, options) {
        server.route({
            method: 'GET',
            path: '/logout',
            options,
            handler: (request, h) => {
                return h.redirect('/').state('token', '');
            }
        });
    }
};
