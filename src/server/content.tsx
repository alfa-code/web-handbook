import React from 'react';
import { renderToString } from 'react-dom/server';

import AppHtml from 'Components/app-html/index';

import readAssetsManifest from './utils/read-assets-manifest';

// Превращаем контент в строку HTML
export function getContent() {
    const assets = readAssetsManifest();

    return renderToString(
        <AppHtml jsFiles={ assets.js } />
    );
}
