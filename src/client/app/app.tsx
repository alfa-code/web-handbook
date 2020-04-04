import React from 'react';
import { MainPage } from 'Src/client/pages/main-page';
import { LoginPage } from 'Src/client/pages/login-page';
import { NotFoundPage } from 'Src/client/pages/not-found-page';
import { PostgrePanel } from 'Src/client/pages/postgre-panel';

import { Switch, Route } from 'react-router-dom';

const cabinet: any = function () {
    return (
        <div>Личный кабинет</div>
    );
}

export default class App extends React.Component {
    render(): any {
        return (
            <Switch>
                <Route exact path='/' component={ MainPage } />
                <Route exact path='/auth' component={ LoginPage } />
                <Route exact path='/cabinet' component={ cabinet } />
                <Route exact path='/postgre' component={ PostgrePanel } />
                <Route path='*' component={ NotFoundPage } />
            </Switch>
        );
    }
}


