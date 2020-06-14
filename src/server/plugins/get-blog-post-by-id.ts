export const getBlogPostByIdPlugin = {
    name: 'getBlogPostById',
    version: '1.0.0',
    register: async function (server, options) {
        server.route({
            method: 'GET',
            path: '/api/get-blog-post-by-id/{id}',
            options,
            handler: async (request, h) => {
                const { BlogPost } = await server.methods.getModels();

                try {
                    const result = await BlogPost.findByPk(request.params.id);

                    if (result) {
                        const res = h.response(result);
                        res.code(200);
                        return res;
                    } else {
                        const res = h.response({});
                        res.code(404);
                        return res;
                    }
                } catch (error) {
                    const res = h.response([]);
                    res.code(404);
                    return res;
                }
            }
        });
    }
}

