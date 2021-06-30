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
        return `if (window) { window.__PRELOADED_STATE__ = ${JSON.stringify(initialReduxState || {}).replace(/</g, '\\u003c')}}; window.__BUILD_MODE__ = "${process.env.NODE_ENV}"`;
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
                    <title>
                    Web Handbook - Cправочник по html, css и другим веб технологиям.
                    </title>
                    <meta name="yandex-verification" content="804113b97f5f6426" />
                    <meta name="yandex-verification" content="c713d5ef58254482" />
                    <meta name="yandex-verification" content="804113b97f5f6426" />
                    <meta name="yandex-verification" content="c713d5ef58254482" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta httpEquiv="Cache-Control" content="no-store" />
                    <meta httpEquiv="Pragma" content="no-cache" />
                    <meta httpEquiv="Expires" content="0" />
                    <meta content="width=device-width, initial-scale=1" name="viewport" />


                    <link rel="apple-touch-icon" sizes="57x57" href="/static/favicons/apple-touch-icon-57x57.png"/>
                    <link rel="apple-touch-icon" sizes="60x60" href="/static/favicons/apple-touch-icon-60x60.png"/>
                    <link rel="apple-touch-icon" sizes="72x72" href="/static/favicons/apple-touch-icon-72x72.png"/>
                    <link rel="apple-touch-icon" sizes="76x76" href="/static/favicons/apple-touch-icon-76x76.png"/>
                    <link rel="apple-touch-icon" sizes="114x114" href="/static/favicons/apple-touch-icon-114x114.png"/>
                    <link rel="apple-touch-icon" sizes="120x120" href="/static/favicons/apple-touch-icon-120x120.png"/>
                    <link rel="apple-touch-icon" sizes="144x144" href="/static/favicons/apple-touch-icon-144x144.png"/>
                    <link rel="apple-touch-icon" sizes="152x152" href="/static/favicons/apple-touch-icon-152x152.png"/>
                    <link rel="apple-touch-icon" sizes="167x167" href="/static/favicons/apple-touch-icon-167x167.png"/>
                    <link rel="apple-touch-icon" sizes="180x180" href="/static/favicons/apple-touch-icon-180x180.png"/>
                    <link rel="apple-touch-icon" sizes="1024x1024" href="/static/favicons/apple-touch-icon-1024x1024.png"/>
                    {/* <link rel="apple-touch-startup-image" media="(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 1)" href="static/favicons/apple-touch-startup-image-320x460.png"/>
                    <link rel="apple-touch-startup-image" media="(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 2)" href="static/favicons/apple-touch-startup-image-640x920.png"/>
                    <link rel="apple-touch-startup-image" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)" href="static/favicons/apple-touch-startup-image-640x1096.png"/>
                    <link rel="apple-touch-startup-image" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)" href="static/favicons/apple-touch-startup-image-750x1294.png"/>
                    <link rel="apple-touch-startup-image" media="(device-width: 414px) and (device-height: 736px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 3)" href="static/favicons/apple-touch-startup-image-1182x2208.png"/>
                    <link rel="apple-touch-startup-image" media="(device-width: 414px) and (device-height: 736px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3)" href="static/favicons/apple-touch-startup-image-1242x2148.png"/>
                    <link rel="apple-touch-startup-image" media="(device-width: 768px) and (device-height: 1024px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 1)" href="static/favicons/apple-touch-startup-image-748x1024.png"/>
                    <link rel="apple-touch-startup-image" media="(device-width: 768px) and (device-height: 1024px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 2)" href="static/favicons/apple-touch-startup-image-1496x2048.png"/>
                    <link rel="apple-touch-startup-image" media="(device-width: 768px) and (device-height: 1024px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 1)" href="static/favicons/apple-touch-startup-image-768x1004.png"/>
                    <link rel="apple-touch-startup-image" media="(device-width: 768px) and (device-height: 1024px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 2)" href="static/favicons/apple-touch-startup-image-1536x2008.png"/> */}
                    <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon-16x16.png"/>
                    <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon-32x32.png"/>
                    <link rel="icon" type="image/png" sizes="228x228" href="/static/favicons/coast-228x228.png"/>
                    <link rel="manifest" href="/static/favicons/manifest.json"/>
                    <link rel="shortcut icon" href="/static/favicons/favicon.ico"/>
                    <link rel="yandex-tableau-widget" href="/static/favicons/yandex-browser-manifest.json"/>
                    <meta name="apple-mobile-web-app-capable" content="yes"/>
                    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
                    <meta name="apple-mobile-web-app-title"/>
                    <meta name="application-name"/>
                    <meta name="mobile-web-app-capable" content="yes"/>
                    <meta name="msapplication-TileColor" content="#fff"/>
                    <meta name="msapplication-TileImage" content="/static/favicons/mstile-144x144.png"/>
                    <meta name="msapplication-config" content="/static/favicons/browserconfig.xml"/>
                    <meta name="theme-color" content="#fff"/>

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
