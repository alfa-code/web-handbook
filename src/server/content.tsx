import React from 'react';
import { renderToString } from 'react-dom/server';

import AppHtml from './app-html';

import readAssetsManifest from './utils/read-assets-manifest';

// Превращаем контент в строку HTML
export function getContent(): string {
  const assets = readAssetsManifest();

  const stringContent = renderToString(
    <AppHtml jsFiles={assets.js} cssFiles={assets.css} />,
  );

  return stringContent;
}
