import { ResponseToolkit, Request } from '@hapi/hapi';
import axios, { AxiosResponse } from 'axios';

export const htmlApiPluginRoutes = {
    getHtmlListRoute: '/api/htmlElements/list',
}

type HtmlTagsList = {
    list: Array<{ name: string }>
}

/**
 * Плагин Hapi - htmlApiPlugin
 * Служит для получения данных по html. Например список тегов, информацию по тегу.
 */
export const htmlApiPlugin = {
    name: 'htmlApiPlugin',
    version: '1.0.0',
    register: async function (server, _options) {
        // Переменная в замыкании хранит список всех тегов.
        let htmlTagsList: HtmlTagsList | undefined;

        server.route({
            method: 'GET',
            path: htmlApiPluginRoutes.getHtmlListRoute,
            handler: async (_request: Request, h: ResponseToolkit) => {
                // Не запрошиваем повторно если список тегов уже есть.
                if (!htmlTagsList) {
                    const response: AxiosResponse<HtmlTagsList> = await axios({
                        method: 'get',
                        url: `https://raw.githubusercontent.com/alfa-code/web-handbook-materials/main/materials/html/elements-list/elements-list.json`
                    });

                    htmlTagsList = response.data;
                }

                return h.response(htmlTagsList).code(200);
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
