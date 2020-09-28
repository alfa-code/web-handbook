export const getUserAuthParams = {
    name: 'getUserAuthParams',
    version: '1.0.0',
    register: async function (server, options) {
        server.route({
            method: 'GET',
            path: '/api/user/auth',
            options,
            handler: async (request, h) => {
                const { auth } = request;

                let responseData;
                if (auth.isAuthenticated) {
                    responseData = {
                        isAuthenticated: auth.isAuthenticated,
                        ...auth.credentials
                    }
                } else {
                    responseData = {
                        isAuthenticated: false
                    }
                }

                const res = h.response(responseData);
                res.code(200);
                return res;
            }
        });
    }
}

