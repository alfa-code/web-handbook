export const updateBlogArticlePlugin = {
    name: 'updateBlogArticlePlugin',
    version: '1.0.0',
    register: async function (server, options) {
        server.route({
            method: 'PUT',
            path: '/api/update-blog-article',
            options,
            handler: async (request, h) => {
                const { BlogPost } = await server.methods.getModels();

                const {
                    imageAddress = '',
                    title = '---',
                    description = '---',
                    content = '---',
                    post_id
                } = request.payload;

                try {
                    const result = await BlogPost.update({
                        imageAddress,
                        title,
                        description,
                        content,
                    }, { where: { post_id } });
                    console.log('result', result);
                    if (result) {
                        const res = h.response(`Статья с id ${post_id} успешно обновлена`);
                        res.code(200);
                        return res;
                    } else {
                        const res = h.response(`Не удалось обновить статью с id ${post_id}`);
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

