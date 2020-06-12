export const getAllBlogPostsPlugin = {
    name: 'getAllBlogPostsPlugin',
    version: '1.0.0',
    register: async function (server, options) {
        server.route({
            method: 'GET',
            path: '/api/get-all-blog-posts',
            options,
            handler: async (request, h) => {
                const { BlogPost } = await server.methods.getModels();

                try {
                    const result = await BlogPost.findAll();
                    if (result) {
                        const res = h.response(result);
                        res.code(200);
                        return res;
                    } else {
                        const res = h.response([]);
                        res.code(200);
                        return res;
                    }
                } catch (error) {
                    const res = h.response([]);
                    res.code(200);
                    return res;
                }
            }
        });
    }
}

