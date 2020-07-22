export const createBlogArticlePlugin = {
    name: 'createBlogArticlePlugin',
    version: '1.0.0',
    register: async function (server, options) {
        server.route({
            method: 'POST',
            path: '/api/create-blog-article',
            options,
            handler: async (request, h) => {
                const { BlogPost } = await server.methods.getModels();

                const {
                    imageAddress = '',
                    title = '---',
                    description = '---',
                    content = '---',
                } = request.payload;

                try {
                    const result = await BlogPost.create({
                        imageAddress,
                        title,
                        description,
                        content,
                    });
                    console.log('result', result);
                    if (result) {
                        const res = h.response('создано');
                        res.code(201);
                        return res;
                    } else {
                        const res = h.response('не создано');
                        res.code(418);
                        return res;
                    }
                } catch (error) {
                    // console.log('error', error)
                    // const res = h.response([]);
                    // res.code(200);
                    // return res;
                }
            }
        });
    }
}

