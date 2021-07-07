import React from 'react';
import { Switch, Route, StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
// import { ToastContainer } from 'react-toastify';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory, createMemoryHistory } from 'history';
import { routerMiddleware, ConnectedRouter } from 'connected-react-router';

import { createRootReducer } from 'Src/reducers';

import { rootSaga } from 'Src/sagas';

import { Layout } from 'Pages/index';

import Lockr from 'lockr';

// TODO: Нужно удалить это после добавления всех тегов
// https://github.com/tsironis/lockr
if (typeof window !== 'undefined') {
    // @ts-ignore
    window.Lockr = Lockr;
}

const composeEnhancers = composeWithDevTools({});

declare global {
    interface Window {
        __PRELOADED_STATE__: any;
        __BUILD_MODE__: any;
    }
}

let initialState;
if (typeof window !== 'undefined') {
    // @ts-ignore
    initialState = window.__PRELOADED_STATE__ || {};
} else if (typeof global !== 'undefined') {
    // @ts-ignore
    initialState = global.__PRELOADED_STATE__ || {};
} else {
    initialState = {};
}

// console.log('initialState  222222222222', initialState); 

let history;
if (typeof window !== 'undefined') {
    history = createBrowserHistory();
} else {
    history = createMemoryHistory();
}

const routerMiddlewar = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware();

const middlewares = [
    sagaMiddleware,
    routerMiddlewar,
];

// Logger if needed
if (typeof window !== 'undefined') {
    if (window.__BUILD_MODE__ !== 'production') {
        const loggerReduxLogger = createLogger({
            collapsed: true,
            duration: true,
            diff: true
        });
        middlewares.push(loggerReduxLogger);
    }
}

const middleware = applyMiddleware(...middlewares);

const rootReducer = createRootReducer(history);

const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(middleware)
);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

sagaMiddleware.run(rootSaga);

type Props = {
    location?: any;
    context?: any;
    initialState?: any;
}

export class App extends React.Component<Props> {
    /**
     * В проекте используется серверный рендеринг. Для серверного роутинга должен использоваться StaticRouter.
     * В случае рендера в браузере используется ConnectedRouter (Роутинг подключен к redux store).
     */
    render(): any {
        // console.log('store store 222 getState', store.getState())
        // @ts-ignore
        //console.log('global?.__PRELOADED_STATE__', global?.__PRELOADED_STATE__);
        const { location, context, initialState } = this.props;

        const store = createStore(
            rootReducer,
            // @ts-ignore
            global?.__PRELOADED_STATE_,
            composeEnhancers(middleware)
        );

        if (typeof window === 'undefined') {
            const store = createStore(
                rootReducer,
                // @ts-ignore
                initialState,
                composeEnhancers(middleware)
            );
            // @ts-ignore
            // console.log('initialState', initialState);
            // console.log('store.getState', store.getState());
            return (
                <Provider store={ store }>
                    <StaticRouter location={ location } context={ context }>
                        <Layout />
                    </StaticRouter>
                </Provider>
            )
        } else {
            const store = createStore(
                rootReducer,
                // @ts-ignore
                window.__PRELOADED_STATE__,
                composeEnhancers(middleware)
            );
            return (
                <Provider store={ store }>
                    <ConnectedRouter history={ history }>
                        <Layout />
                    </ConnectedRouter>
                </Provider>
            )
        }
    }
}


