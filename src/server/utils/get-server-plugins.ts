import HapiErrorPlugin from 'hapi-error';
import Inert from '@hapi/inert';

import { anyRoutePlugin } from 'Src/server/plugins/routes/any-route';
import { authRoutePlugin } from 'Src/server/plugins/routes/auth-route';
import { settingsSubpageRoutePlugin } from 'Src/server/plugins/routes/settings-subpage-route';
import { postgreRoutePlugin } from 'Src/server/plugins/routes/postgre-route';
import { logoutPlugin } from 'Src/server/plugins/logout-plugin';
import { assetsRoutePlugin } from 'Src/server/plugins/assets-plugin';

export function getServerPlugins() {
    const plugins = [];

    plugins.push({
        plugin: HapiErrorPlugin,
        options: {
            statusCodes: {
                '401': {
                    'redirect': function (): string {
                        return '/auth'
                    }
                }
            }
        }
    });

    plugins.push({
        plugin: anyRoutePlugin,
        options: {
            auth: false
        }
    });

    plugins.push({
        plugin: authRoutePlugin,
        options: {
            auth: false,
        },
    });

    plugins.push({
        plugin: settingsSubpageRoutePlugin,
        options: {
            auth: false
        },
    });

    plugins.push({
        plugin: postgreRoutePlugin,
        options: {
            auth: false
        }
    });

    plugins.push({
        plugin: logoutPlugin,
        options: {
            auth: false,
        }
    });

    plugins.push({
        plugin: Inert
    })

    plugins.push({
        plugin: assetsRoutePlugin,
        options: {
            auth: false,
        }
    })

    return plugins;
}
