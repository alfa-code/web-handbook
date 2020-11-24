import { ResponseToolkit } from '@hapi/hapi';
// import axios from 'axios';

import { getHtmlTagsListByAlphabet, /* isHtmlTagExists */ } from 'Utils/html';

export const htmlApiPlugin = {
    name: 'htmlApiPlugin',
    version: '1.0.0',
    register: async function (server, _options) {
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

        // server.route({
        //     method: 'GET',
        //     path: '/api/html/{tag}',
        //     handler: async function (request, h: ResponseToolkit) {
        //         const { params: { tag } } = request;

        //         const isTagExists = isHtmlTagExists(tag);
        //         console.log('isTagExists', isTagExists)

        //         if (!isTagExists) {
        //             return h.response({
        //                 message: 'tag does not exists'
        //             }).code(404);
        //         }

        //         try {
        //             const tagInfo = await axios.get(`https://raw.githubusercontent.com/alfa-code/web-handbook-materials/main/materials/html/tags/${tag}/main.json`);
        //             const { status, data } = tagInfo;

        //             return h.response({
        //                 message: 'found',
        //                 data
        //             }).code(status);

        //         } catch (error) {
        //             if (error.response) {
        //                 const { status, data } = error.response;

        //                 return h.response({
        //                     message: 'tag is not found',
        //                     githubStatus: status,
        //                     githubMessage: data
        //                 }).code(404);
        //             }

        //             console.log(error);

        //             return h.response({
        //                 message: 'server error',
        //             }).code(500);
        //         }
        //     }
        // });
    }
};
