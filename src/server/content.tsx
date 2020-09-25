import React from 'react';
import { renderToString } from 'react-dom/server';
// import jwtDecode from 'jwt-decode';

import jwt from 'jsonwebtoken';

import get from 'lodash/get';

import AppHtml from 'Components/app-html';
import App from 'Src/client/app/app';

// import { StaticRouter as Router } from 'react-router-dom';

import readAssetsManifest from 'Src/server/utils/read-assets-manifest';

import { JWT_SECRET_KEY } from 'Src/constants/env-variables';

// Превращаем контент в строку HTML
export async function getContent(request: any) {
    const assets = readAssetsManifest();

    // Verify token and generate default redux state
    const token = get(request, 'state.token');
    let isAuthenticated = false;
    let userTokenInfo: any = {};
    let userParams: any = {};
    let userCourses: any = [];

    if (token) {
        await jwt.verify(token, process.env[JWT_SECRET_KEY], async function(err, decoded) {
            if (err) {
                console.log('token verify err: ', err);
            } else {
                if (decoded) {
                    isAuthenticated = true;
                    userTokenInfo = { ...decoded };

                    // userParams
                    {
                        const { result } = await request.server.inject({
                            method: 'GET',
                            url: '/api/user/get',
                            auth: {
                                strategy: 'jwt',
                                credentials: {
                                    username: userTokenInfo.username
                                }
                            }
                        });

                        if (result) {
                            userParams = { ...userParams, ...result };
                        }
                    }

                    // UserCourses
                    {
                        const { result } = await request.server.inject({
                            method: 'GET',
                            url: '/api/courses/get-user-courses',
                            auth: {
                                strategy: 'jwt',
                                credentials: {
                                    username: userTokenInfo.username,
                                    userId: userTokenInfo.userId
                                }
                            }
                        });

                        console.log('result', result)

                        if (result) {
                            userCourses = [...result];
                        }
                    }


                }
            }
        });
    }

    const context = {};

    const stringContent = renderToString(
        <AppHtml
            jsFiles={assets.js}
            cssFiles={assets.css}
            initialReduxState={
                {
                    auth: {
                        isAuthenticated,
                        ...userTokenInfo
                    },
                    UI: {
                        changePassword: {
                            hintVisible: false
                        }
                    },
                    user: {
                        params: {
                            ...userParams
                        },
                        courses: userCourses
                    }
                }
            }
        >
            {/* <Router
                location={{ pathname: request.url.pathname, hash: request.url.pathname }}
                context={context}
            >
                <App />
            </Router> */}
            <App
                location={{ pathname: request.url.pathname, hash: request.url.pathname }}
                context={context}
            />
        </AppHtml>,
    );

    return stringContent;
}
