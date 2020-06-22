import HapiErrorPlugin from 'hapi-error';
import Inert from '@hapi/inert';

import { anyRoutePlugin } from 'Src/server/plugins/routes/any-route';
import { authRoutePlugin } from 'Src/server/plugins/routes/auth-route';
import { settingsSubpageRoutePlugin } from 'Src/server/plugins/routes/settings-subpage-route';
import { postgreRoutePlugin } from 'Src/server/plugins/routes/postgre-route';
import { blogRoutePlugin } from 'Src/server/plugins/routes/blog-route';
import { logoutPlugin } from 'Src/server/plugins/logout-plugin';
import { assetsRoutePlugin } from 'Src/server/plugins/assets-plugin';
import { changeUserParamsPlugin, getUserParamsPlugin } from 'Src/server/plugins/user/user-params';
import { changePasswordPlugin } from 'Src/server/plugins/change-password';
import { getAllBlogPostsPlugin } from 'Src/server/plugins/get-all-blog-posts';
import { getBlogPostByIdPlugin } from 'Src/server/plugins/get-blog-post-by-id';

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
            auth: 'jwt'
        },
    });

    plugins.push({
        plugin: postgreRoutePlugin,
        options: {
            auth: 'jwt'
        }
    });

    plugins.push({
        plugin: blogRoutePlugin,
        options: {
            auth: false
        }
    });

    plugins.push({
        plugin: logoutPlugin,
        options: {
            auth: false
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

    plugins.push({
        plugin: changePasswordPlugin,
        options: {
            auth: 'jwt',
        }
    })

    plugins.push({
        plugin: getAllBlogPostsPlugin,
        options: {
            auth: false,
        }
    });

    plugins.push({
        plugin: getBlogPostByIdPlugin,
        options: {
            auth: false,
        }
    });

    plugins.push({
        plugin: changeUserParamsPlugin,
        options: {
            auth: 'jwt'
        },
    })

    plugins.push({
        plugin: getUserParamsPlugin,
        options: {
            auth: 'jwt'
        },
    })

    return plugins;
}
