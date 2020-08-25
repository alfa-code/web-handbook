import React from 'react';
import { Switch, Route, BrowserRouter, StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { ToastContainer } from 'react-toastify';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import { MainPage } from 'Src/client/pages/main-page';
import { AuthPage } from 'Src/client/pages/auth-page';
import { NotFoundPage } from 'Src/client/pages/not-found-page';
import { PostgrePanel } from 'Src/client/pages/postgre-panel';
import { SettingsPage } from 'Src/client/pages/settings-page';
import { BlogListPage } from 'Src/client/pages/blog-list-page';

import { PlaylistPage } from 'Pages/playlist-page';
import { BlogArticlePageContainer } from 'Containers/blog-article-page-container';
import { CoursePageContainer } from 'Containers/course-page-container/course-page-container.container'

import { AdminPage } from 'Pages/admin-page';

import rootReducer from 'Src/reducers';
import { rootSaga } from 'Src/sagas';
import { CoursesPage } from 'Pages/courses-page/courses-page';

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

const loggerReduxLogger = createLogger({
    collapsed: true,
    duration: true,
    diff: true
});


const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(loggerReduxLogger, sagaMiddleware))
);


sagaMiddleware.run(rootSaga);

type Props = {
    location?: any;
    context?: any;
}

export default class App extends React.Component<Props> {
    getMainContent() {
        return (
            <>
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
                    <Route exact path='/blog/article/:id' component={ BlogArticlePageContainer } />
                    <Route exact path='/courses' component={ CoursesPage } />
                    <Route exact path='/courses/:id' component={ CoursePageContainer } />
                    <Route exact path='/courses/:id/playlist' component={ PlaylistPage } />
                    <Route path='/admin' component={ AdminPage } />
                    <Route path='*' component={ NotFoundPage } />
                </Switch>
                <ToastContainer />
            </>
        );
    }

    render(): any {
        const { location, context } = this.props;

        if (typeof window === 'undefined') {
            return (
                <Provider store={ store }>
                    <StaticRouter location={ location } context={ context }>
                        { this.getMainContent() }
                    </StaticRouter>
                </Provider>
            )
        } else {
            return (
                <Provider store={ store }>
                    <BrowserRouter>
                        { this.getMainContent() }
                    </BrowserRouter>
                </Provider>
            )
        }
    }
}


