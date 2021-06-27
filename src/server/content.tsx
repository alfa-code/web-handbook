import React from 'react';
import { renderToString } from 'react-dom/server';

import { App } from 'Src/client/app/app';
import AppHtml from 'Components/app-html';
import readAssetsManifest from 'Src/server/utils/read-assets-manifest';

// Рендерим JSX в HTML (строку)
export async function getContent(request: any) {
    const assets = readAssetsManifest();

    const context = {};

    // Получаем список всех html элементов для предзаполнения начального стейта.
    const response = await request.server.inject('/api/htmlElements/list');
    const htmlTagsList = response?.result;

    const initialState = {
        app: {
            settings: {
                features: {
                    htmlRules: false,
                    cssRules: false,
                }
            }
        },
        UI: {
            htmlTagsList: htmlTagsList ? htmlTagsList : { list: [] },
            htmlTagsInfo: {},
            mobileMenu: {
                isOpened: false
            }
        },
    }

    const stringContent = renderToString(
        <AppHtml
            jsFiles={assets.js}
            cssFiles={assets.css}
            initialReduxState={ initialState }
        >
            <App
                location={{
                    pathname: request.url.pathname,
                    hash: request.url.pathname
                }}
                context={context}
            />
        </AppHtml>,
    );

    return stringContent;
}
