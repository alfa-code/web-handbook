import { ResponseToolkit, Request, Server } from '@hapi/hapi';
import axios, { AxiosResponse } from 'axios';

import md5 from 'md5';

export const htmlApiPluginRoutes = {
    getHtmlListRoute: '/api/htmlElements/list',
}

type Options = {
    routes: Array<{
        method: string;
        clientToServerRoute: string;
        serverToServiceRoute: string;
    }>
}

/**
 * Плагин Hapi - fetchDataApiPlugin
 * Может генерировать роуты которые вызывают axios с заданными параметрами и возращает результат.
 */
export const fetchDataApiPlugin = {
    name: 'htmlApiPlugin',
    version: '1.0.0',
    register: async function (server: Server, options: Options) {
        const { routes } = options;

        const dataInMemory = {};

        routes.forEach(routeParams => {
            const {
                method,
                clientToServerRoute,
                serverToServiceRoute,
            } = routeParams;

            const dataNameHash = md5(clientToServerRoute);

            console.log('dataNameHash', dataNameHash)

            server.route({
                method,
                path: clientToServerRoute,
                handler: async (_request: Request, h: ResponseToolkit) => {
                    if (!dataInMemory[dataNameHash]) {
                        const response: AxiosResponse<any> = await axios({
                            method: 'get',
                            url: serverToServiceRoute, // `https://raw.githubusercontent.com/alfa-code/web-handbook-materials/main/materials/html/elements-list/elements-list.json`
                        });

                        dataInMemory[dataNameHash] = response.data;
                    }

                    return h.response(dataInMemory[dataNameHash]).code(200);
                }
            })
        });
    }
};
