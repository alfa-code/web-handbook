// import HapiErrorPlugin from 'hapi-error';
import Inert from '@hapi/inert';
// import Vision from '@hapi/vision'
// import HapiSwagger from 'hapi-swagger';

import { anyRoutePlugin } from 'Src/server/plugins/routes/any-route';
import { assetsRoutePlugin } from 'Src/server/plugins/assets-plugin';

export function getServerPlugins() {
    const plugins = [
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
            options: {
                auth: false,
            }
        },
        {
            plugin: anyRoutePlugin,
            options: {
                auth: false
            }
        },
    ];

    return plugins;
}
