import React from 'react';
import { renderToString } from 'react-dom/server';

import readAssetsManifest from './utils/read-assets-manifest';

import AppHtml from '../client/components/app-html/index';

// Превращаем контент в строку HTML
export function getContent() {
    const assets = readAssetsManifest();
    let content = renderToString(
        <AppHtml jsFiles={ assets.js } />
    );
    return content;
}
