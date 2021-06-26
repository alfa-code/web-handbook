import React from 'react';

import { YandexMetrica } from './yandex-metrica';

type Props = {
    children?: any;
    jsFiles: string[];
    cssFiles: string[];
    initialReduxState: any;
}

/**
 * Компонент html кода приложения. Нужен для server-side-rendering.
 */
export default class AppHtml extends React.PureComponent<Props> {

    getStoreScriptMarkup = () => {
        const { initialReduxState = {} } = this.props;
        // eslint-disable-next-line
        return `if (window) { window.__PRELOADED_STATE__ = ${JSON.stringify(initialReduxState || {}).replace(/</g, '\\u003c')}}`;
    }

    render() {
        const {
            children,
            jsFiles = [],
            cssFiles = []
        } = this.props;

        return (
            <html lang="ru">
                <head>
                    <meta name="yandex-verification" content="804113b97f5f6426" />
                    <meta name="yandex-verification" content="c713d5ef58254482" />
                    <meta name="yandex-verification" content="804113b97f5f6426" />
                    <meta name="yandex-verification" content="c713d5ef58254482" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta httpEquiv="Cache-Control" content="no-store" />
                    <meta httpEquiv="Pragma" content="no-cache" />
                    <meta httpEquiv="Expires" content="0" />
                    <meta content="width=device-width, initial-scale=1" name="viewport" />
                    {/* <link rel="icon" href="/assets/favicons/favicon.ico" type="image/x-icon" />
                    <link rel="manifest" href="/assets/favicons/manifest.json" /> */}
                    {
                        cssFiles.map(
                            (link) => <link rel='stylesheet' type='text/css' href={`${link}`} key={link} />
                        )
                    }
                </head>
                <body>
                    <YandexMetrica />
                    <div id="react-app">
                        {children}
                    </div>
                    <script dangerouslySetInnerHTML={{ __html: this.getStoreScriptMarkup() }} />
                    {
                        jsFiles.map(
                            (link) => <script type="text/javascript" defer src={`${link}`} key={link} />,
                        )
                    }
                </body>
            </html>
        );
    }
}
