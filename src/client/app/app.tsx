import React from 'react';

import Logo from '../../../src/client/components/logo/logo';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Logo/>
                <h1>Hello World!</h1>
            </div>
        );
    }
}
