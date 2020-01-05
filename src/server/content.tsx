import React from 'react';
import { renderToString } from 'react-dom/server';

import AppHtml from 'Components/app-html';
import App from 'Src/client/app/app';

import { StaticRouter } from 'react-router-dom';

import readAssetsManifest from './utils/read-assets-manifest';

// Превращаем контент в строку HTML
export function getContent(request: any): string {
  const assets = readAssetsManifest();

  const context = {};

  const stringContent = renderToString(
    <AppHtml jsFiles={ assets.js } cssFiles={ assets.css }>
        <StaticRouter location={ { pathname: request.url.pathname, hash: request.url.pathname  }  } context={ context }>
            <App />
        </StaticRouter>
    </AppHtml>,
  );

  return stringContent;
}
