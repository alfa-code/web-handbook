import React from 'react';
import Hoek from '@hapi/hoek';
import { Switch, Route, StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { ToastContainer } from 'react-toastify';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory, createMemoryHistory  } from 'history';
import { routerMiddleware, ConnectedRouter } from 'connected-react-router';

import { COURSES_ENDPOINTS } from 'Src/constants/endpoints';

import { MainPage } from 'Src/client/pages/main-page';
import { NotFoundPage } from 'Src/client/pages/not-found-page';
import { PostgrePanel } from 'Src/client/pages/postgre-panel';
import { SettingsPage } from 'Src/client/pages/settings-page';
import { BlogListPage } from 'Src/client/pages/blog-list-page';
import { PageFrame } from 'Components/page-frame';


import { PlaylistPageContainer } from 'Containers/playlist-page-container';
import { AuthPageContainer } from 'Containers/auth-page-container';
import { BlogArticlePageContainer } from 'Containers/blog-article-page-container';
import { CoursePageContainer } from 'Containers/course-page-container/course-page-container.container';

import { AdminPage } from 'Pages/admin-page';

import { createRootReducer } from 'Src/reducers';
import { rootSaga } from 'Src/sagas';
import { CoursesPage } from 'Pages/courses-page/courses-page';

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

const loggerReduxLogger = createLogger({
    collapsed: true,
    duration: true,
    diff: true
});

let history;
if (typeof window !== 'undefined') {
    history = createBrowserHistory();
} else {
    history = createMemoryHistory();
}

const rootReducer = createRootReducer(history);
const routerMiddlewar = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware(loggerReduxLogger, sagaMiddleware, routerMiddlewar);

const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(middleware)
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
                    <Route
                        exact
                        path='/auth'
                        render={() => {
                            return (
                                <AuthPageContainer mode="login"/>
                            );
                        }}
                    />
                    <Route
                        exact
                        path='/registration'
                        render={() => {
                            return (
                                <AuthPageContainer mode="registration"/>
                            );
                        }}
                    />
                    <Route path='/admin' component={ AdminPage } />
                    <Route path='*' component={ () => (
                        <PageFrame>
                            <Switch>
                                <Route exact path='/' component={ MainPage } />
                                <Route path='/profile' component={ SettingsPage } />
                                <Route exact path='/postgre' component={ PostgrePanel } />
                                <Route exact path='/blog' component={ BlogListPage } />
                                <Route exact path='/blog/article/:id' component={ BlogArticlePageContainer } />
                                <Route exact path='/courses' component={ CoursesPage } />
                                <Route
                                    exact
                                    path={ Hoek.reachTemplate({ course_id: ':id' }, COURSES_ENDPOINTS.coursePage) }
                                    component={ CoursePageContainer }
                                />
                                <Route
                                    exact
                                    path={Hoek.reachTemplate({ course_id: ':id' }, COURSES_ENDPOINTS.study)}
                                    component={ PlaylistPageContainer }
                                />
                                <Route path='*' component={ NotFoundPage } />
                            </Switch>
                        </PageFrame>
                    ) } />
                </Switch>
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
                    <ConnectedRouter history={ history }>
                        { this.getMainContent() }
                        <ToastContainer />
                    </ConnectedRouter>
                </Provider>
            )
        }
    }
}


