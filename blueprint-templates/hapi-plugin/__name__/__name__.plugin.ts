export const {{camelCase name}}Plugin = {
    name: '{{camelCase name}}Plugin',
    version: '1.0.0',
    register: async function (server, options) {
        server.route({
            method: 'GET',
            path: '/api/{{ name }}',
            options,
            handler: async (request, h) => {
                const res = h.response();
                res.code(200);
                return res;
            }
        });
    }
}

