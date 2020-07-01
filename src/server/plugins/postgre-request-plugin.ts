export const postgreRequestPlugin = {
    name: 'postgreRequestPlugin',
    version: '1.0.0',
    register: async function (server) {
        server.route({
            method: 'POST',
            path: '/api/postgre/request',
            options: {
                auth: 'jwt',
            },
            handler: async (request, h) => {
                const { sql = '' } = request.payload;
    
                const result = await request.pg.client.query(sql);
    
                return h.response(JSON.stringify(result));
            }
        });
    }
};
