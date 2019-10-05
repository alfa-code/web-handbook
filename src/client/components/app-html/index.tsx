import React from 'react';

type Props = {
    children?: any
    jsFiles: string[]
}

/**
 * Компонент html кода приложения. Нужен для server-side-rendering.
 */
export default class AppHtml extends React.PureComponent<Props> {
    render() {
        return (
            <html lang='ru'>
                <head>
                    <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
                    <meta httpEquiv='Cache-Control' content='no-store' />
                    <meta httpEquiv='Pragma' content='no-cache' />
                    <meta httpEquiv='Expires' content='0' />
                </head>
                <body>
                    <div id='react-app'></div>
                    { this.props.children }
                    { this.props.jsFiles && this.props.jsFiles
                        .map(link => <script type='text/javascript' defer={ true } src={ link } key={ link } />)
                    }
                </body>
            </html>
        )
    }
}
