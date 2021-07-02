import { ResponseToolkit, Request, Server } from '@hapi/hapi';
import axios, { AxiosResponse } from 'axios';
import Boom from '@hapi/boom';

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

            server.route({
                method,
                path: clientToServerRoute,
                handler: async (_request: Request, h: ResponseToolkit) => {
                    try {
                        if (!dataInMemory[dataNameHash]) {
                            const response: AxiosResponse<any> = await axios({
                                method: 'get',
                                url: serverToServiceRoute,
                            });

                            dataInMemory[dataNameHash] = response.data;
                        }

                        return h.response(dataInMemory[dataNameHash]).code(200);
                    } catch (error) {
                        return Boom.badImplementation('Ошибка при запросе axios', error);
                    }
                }
            })
        });
    }
};
