import HapiErrorPlugin from 'hapi-error';
import Inert from '@hapi/inert';

import { anyRoutePlugin } from 'Src/server/plugins/routes/any-route';
import { authRoutePlugin } from 'Src/server/plugins/routes/auth-route';
import { settingsSubpageRoutePlugin } from 'Src/server/plugins/routes/settings-subpage-route';
import { postgreRoutePlugin } from 'Src/server/plugins/routes/postgre-route';
import { adminRoutePlugin } from 'Src/server/plugins/routes/admin-route';
import { blogRoutePlugin } from 'Src/server/plugins/routes/blog-route';
import { logoutPlugin } from 'Src/server/plugins/logout-plugin';
import { assetsRoutePlugin } from 'Src/server/plugins/assets-plugin';
import { changeUserParamsPlugin, getUserParamsPlugin } from 'Src/server/plugins/user/user-params';
import { changePasswordPlugin } from 'Src/server/plugins/change-password';
import { getAllBlogPostsPlugin } from 'Src/server/plugins/get-all-blog-posts';
import { getBlogPostByIdPlugin } from 'Src/server/plugins/get-blog-post-by-id';
import { registrationPlugin } from 'Src/server/plugins/registration/registration-plugin';
import { loginPlugin } from 'Src/server/plugins/login-plugin';
import { createBlogArticlePlugin } from 'Src/server/plugins/api/blog/create-blog-article';
import { updateBlogArticlePlugin } from 'Src/server/plugins/api/blog/update-blog-article';
import { deleteBlogArticlePlugin } from 'Src/server/plugins/api/blog/delete-blog-article';
import { getCoursesListPlugin } from 'Src/server/plugins/api/courses/get-courses-lits.plugin';

export function getServerPlugins() {
    const plugins = [
        {
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
        },
        {
            plugin: Inert
        },
        {
            plugin: assetsRoutePlugin,
            options: {
                auth: false,
            }
        },
        {
            plugin: registrationPlugin
        },
        {
            plugin: loginPlugin
        },
        {
            plugin: logoutPlugin,
            options: {
                auth: false
            }
        },
        {
            plugin: anyRoutePlugin,
            options: {
                auth: false
            }
        },
        {
            plugin: authRoutePlugin,
            options: {
                auth: false,
            },
        },
        {
            plugin: settingsSubpageRoutePlugin,
            options: {
                auth: 'jwt'
            },
        },
        {
            plugin: postgreRoutePlugin,
            options: {
                auth: 'jwt'
            }
        },
        {
            plugin: adminRoutePlugin,
            options: {
                auth: 'jwt'
            }
        },
        {
            plugin: blogRoutePlugin,
            options: {
                auth: false
            }
        },
        {
            plugin: changePasswordPlugin,
            options: {
                auth: 'jwt',
            }
        },
        {
            plugin: getAllBlogPostsPlugin,
            options: {
                auth: false,
            }
        },
        {
            plugin: createBlogArticlePlugin,
            options: {
                auth: 'jwt',
            }
        },{
            plugin: updateBlogArticlePlugin,
            options: {
                auth: 'jwt',
            }
        },{
            plugin: deleteBlogArticlePlugin,
            options: {
                auth: 'jwt',
            }
        },
        {
            plugin: getBlogPostByIdPlugin,
            options: {
                auth: false,
            }
        },
        {
            plugin: getCoursesListPlugin,
            options: {
                auth: false,
            }
        },
        {
            plugin: changeUserParamsPlugin,
            options: {
                auth: 'jwt'
            },
        },
        {
            plugin: getUserParamsPlugin,
            options: {
                auth: 'jwt'
            },
        }
    ];

    return plugins;
}
