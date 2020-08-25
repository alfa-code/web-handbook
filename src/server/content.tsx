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
export function getContent(request: any): string {
    const assets = readAssetsManifest();

    // Verify token and generate default redux state
    const token = get(request, 'state.token');
    let isAuthenticated = false;
    let userTokenInfo = {};
    if (token) {
        jwt.verify(token, process.env[JWT_SECRET_KEY], function(err, decoded) {
            if (err) {
                console.log('token verify err: ', err);
            } else {
                if (decoded) {
                    isAuthenticated = true;
                    userTokenInfo = { ...decoded };
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
