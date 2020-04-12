import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { ToastContainer } from 'react-toastify';

import { MainPage } from 'Src/client/pages/main-page';
import { LoginPage } from 'Src/client/pages/login-page';
import { NotFoundPage } from 'Src/client/pages/not-found-page';
import { PostgrePanel } from 'Src/client/pages/postgre-panel';
import { SettingsPage } from 'Src/client/pages/settings-page';

import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from 'Src/reducers';

const composeEnhancers = composeWithDevTools({});

declare global {
    interface Window {
        __PRELOADED_STATE__: any;
    }
}

let initialState;
try {
    initialState = window.__PRELOADED_STATE__
} catch {
    initialState = {}
}

const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(logger))
);

export default class App extends React.Component {
    render(): any {
        return (
            <Provider store={ store }>
                <Switch>
                    <Route exact path='/' component={ MainPage } />
                    <Route exact path='/auth' component={ LoginPage } />
                    <Route path='/settings' component={ SettingsPage } />
                    <Route exact path='/postgre' component={ PostgrePanel } />
                    <Route path='*' component={ NotFoundPage } />
                </Switch>
                <ToastContainer />
            </Provider>
        );
    }
}


