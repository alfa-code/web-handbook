import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { ToastContainer } from 'react-toastify';

import { MainPage } from 'Src/client/pages/main-page';
import { AuthPage } from 'Src/client/pages/auth-page';
import { NotFoundPage } from 'Src/client/pages/not-found-page';
import { PostgrePanel } from 'Src/client/pages/postgre-panel';
import { SettingsPage } from 'Src/client/pages/settings-page';
import { BlogListPage } from 'Src/client/pages/blog-list-page';
import { BlogArticlePage } from 'Src/client/pages/blog-article-page';

import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'

import rootReducer from 'Src/reducers';
import { rootSaga } from 'Src/sagas';

const composeEnhancers = composeWithDevTools({});

const sagaMiddleware = createSagaMiddleware();

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
    composeEnhancers(applyMiddleware(logger, sagaMiddleware))
);

sagaMiddleware.run(rootSaga)

export default class App extends React.Component {
    render(): any {
        return (
            <Provider store={ store }>
                <Switch>
                    <Route exact path='/' component={ MainPage } />
                    <Route
                        exact
                        path='/auth'
                        render={() => {
                            return (
                                <AuthPage mode="login"/>
                            );
                        }}
                    />
                    <Route
                        exact
                        path='/registration'
                        render={() => {
                            return (
                                <AuthPage mode="registration"/>
                            );
                        }}
                    />
                    <Route path='/profile' component={ SettingsPage } />
                    <Route exact path='/postgre' component={ PostgrePanel } />
                    <Route exact path='/blog' component={ BlogListPage } />
                    <Route exact path='/blog/article/:id' component={ BlogArticlePage } />
                    <Route path='*' component={ NotFoundPage } />
                </Switch>
                <ToastContainer />
            </Provider>
        );
    }
}


