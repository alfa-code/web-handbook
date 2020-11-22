import React from 'react';
import { renderToString } from 'react-dom/server';

import AppHtml from 'Components/app-html';

import { getHtmlTagsListByAlphabet } from 'Utils/html';

import App from 'Src/client/app/app';
import readAssetsManifest from 'Src/server/utils/read-assets-manifest';



// Рендерим JSX в HTML (строку)
export async function getContent(request: any) {
    const assets = readAssetsManifest();

    const context = {};

    const initialState = {
        UI: {
            htmlTagsList: getHtmlTagsListByAlphabet(),
            htmlTagsInfo: {}
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
