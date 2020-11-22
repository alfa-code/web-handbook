import { ResponseToolkit } from '@hapi/hapi';

import { getHtmlTagsListByAlphabet, isHtmlTagExists } from 'Utils/html';

export const htmlApiPlugin = {
    name: 'htmlApiPlugin',
    version: '1.0.0',
    register: async function (server, options) {
        let htmlTags;

        server.route({
            method: 'GET',
            path: '/api/html/list',
            handler: function (_request, h: ResponseToolkit) {
                if (!htmlTags) {
                    htmlTags = getHtmlTagsListByAlphabet();
                }

                return h.response(htmlTags).code(200);
            }
        });

        server.route({
            method: 'GET',
            path: '/api/html/{tag}',
            handler: function (request, h: ResponseToolkit) {
                const { params: { tag } } = request;


                const isTagExists = isHtmlTagExists(tag);
                console.log('isTagExists', isTagExists)

                if (!isTagExists) {
                    return h.response({
                        message: 'tag not found'
                    }).code(404);
                }

                return h.response({
                    message: 'found',
                    data: { tag: tag }
                }).code(200);
            }
        });
    }
};
