import React from 'react';

type Props = {
    children?: any;
    jsFiles: string[];
    cssFiles: string[];
}

/**
 * Компонент html кода приложения. Нужен для server-side-rendering.
 */
export default class AppHtml extends React.PureComponent<Props> {
    render() {
        const {
            children,
            jsFiles = [],
            cssFiles = [],
        } = this.props;

        return (
            <html lang="ru">
                <head>
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta httpEquiv="Cache-Control" content="no-store" />
                    <meta httpEquiv="Pragma" content="no-cache" />
                    <meta httpEquiv="Expires" content="0" />
                    <meta content="width=device-width, initial-scale=1" name="viewport" />
                    {
                        cssFiles.map(
                            (link) => <link rel='stylesheet' type='text/css' href={`${link}`} key={link} />
                        )
                    }
                </head>
                <body>
                    <div id="react-app" />
                    {children}
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
