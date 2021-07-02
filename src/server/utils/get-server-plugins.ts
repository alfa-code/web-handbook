// import HapiErrorPlugin from 'hapi-error';
import { ServerRegisterPluginObject } from '@hapi/hapi';
import Inert from '@hapi/inert';
// import Vision from '@hapi/vision'
// import HapiSwagger from 'hapi-swagger';

import { anyRoutePlugin } from 'Src/server/plugins/routes/any-route';
import { assetsRoutePlugin } from 'Src/server/plugins/assets-plugin';

import { fetchDataApiPlugin } from 'Src/server/plugins/api/fetch-data.plugin';

export function getServerPlugins() {
    const plugins: Array<ServerRegisterPluginObject<any>> = [
        // {
        //     plugin: HapiErrorPlugin,
        //     options: {
        //         statusCodes: {
        //             '401': {
        //                 'redirect': function (): string {
        //                     return '/auth'
        //                 }
        //             }
        //         }
        //     }
        // },
        Inert,
        // Vision,
        // {
        //     plugin: HapiSwagger,
        //     options: {
        //         info: {
        //             title: 'API Documentation',
        //             version: '1.0.0',
        //         },
        //     }
        // },
        // {
        //     plugin: getUserAuthParams
        // },
        {
            plugin: assetsRoutePlugin,
            options: { auth: false, }
        },
        {
            plugin: anyRoutePlugin,
            options: { auth: false }
        },
        {
            plugin: fetchDataApiPlugin,
            options: {
                auth: false,
                routes: [
                    {
                        method: 'get',
                        clientToServerRoute: '/api/htmlElements/list',
                        serverToServiceRoute: 'https://raw.githubusercontent.com/alfa-code/web-handbook-materials/main/materials/html/elements-list/elements-list.json',
                    },
                    {
                        method: 'get',
                        clientToServerRoute: '/api/html/attributes/list',
                        serverToServiceRoute: 'https://raw.githubusercontent.com/alfa-code/web-handbook-materials/main/materials/html/attributes-list/list.json',
                    }
                ]
            }
        }
    ];

    return plugins;
}
