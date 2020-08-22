export const deleteBlogArticlePlugin = {
    name: 'deleteBlogArticlePlugin',
    version: '1.0.0',
    register: async function (server, options) {
        server.route({
            method: 'DELETE',
            path: '/api/delete-blog-article/{post_id}',
            options,
            handler: async (request, h) => {
                const { BlogPost } = await server.methods.getModels();

                const { post_id } = request.params;

                console.log('post_id', post_id)

                try {
                    const result = await BlogPost.destroy({
                        where: { post_id }
                    })

                    console.log('result', result);
                    if (result) {
                        const res = h.response('удаллено');
                        res.code(200);
                        return res;
                    } else {
                        const res = h.response('не удаллено');
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

