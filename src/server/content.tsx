import React from 'react';
import { renderToString } from 'react-dom/server';

import { App } from 'Src/client/app/app';
import AppHtml from 'Components/app-html';
import readAssetsManifest from 'Src/server/utils/read-assets-manifest';

import fs from 'fs';

// import { initialState } from './initStore';

// Рендерим JSX в HTML (строку)
export async function getContent(request: any) {
    const assets = readAssetsManifest();

    const context = {};

    // console.log(process.cwd())
    // /home/hydrock/web/web-handbook

    // Получаем список всех html элементов для предзаполнения начального стейта.
    // const response_1 = await request.server.inject('/api/htmlElements/list');
    // const htmlTagsList = response_1?.result;

    // Получаем список всех html атрибутов для предзаполнения начального стейта.

    // const response_2 = await request.server.inject('/api/html/attributes/list');
    // const htmlAttributesList = response_2?.result;

    // const initialState = {
    //     app: {
    //         settings: {
    //             features: {
    //                 htmlRules: false,
    //                 cssRules: false,
    //             }
    //         }
    //     },
    //     data: {
    //         htmlAttributesList: {
    //             list: htmlAttributesList
    //         },
    //         htmlTagsList: htmlTagsList ? htmlTagsList : { list: [] },
    //         htmlTagsInfo: {},
    //     },
    //     UI: {
    //         mobileMenu: {
    //             isOpened: false
    //         }
    //     },
    // }

    const rawData = fs.readFileSync('./initialState.json');
    // @ts-ignore
    const initialState = JSON.parse(rawData);

    // const initialState =

    try {
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
                    context={ context }
                    initialReduxState={ initialState }
                />
            </AppHtml>,
        );

        return stringContent;
    } catch (e) {
        console.log(e);

        const stringContent = renderToString(
            <AppHtml
                jsFiles={assets.js}
                cssFiles={assets.css}
                initialReduxState={ initialState }
            >
                Загрузка...
            </AppHtml>,
        );

        return stringContent;
    }
}
