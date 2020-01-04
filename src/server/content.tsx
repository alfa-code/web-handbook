import React from 'react';
import { renderToString } from 'react-dom/server';

import AppHtml from 'Components/app-html';
import App from 'Src/client/app/app';

import readAssetsManifest from './utils/read-assets-manifest';

// Превращаем контент в строку HTML
export function getContent(): string {
  const assets = readAssetsManifest();

  const stringContent = renderToString(
    <AppHtml jsFiles={assets.js} cssFiles={assets.css}>
        <App />
    </AppHtml>,
  );

  return stringContent;
}
