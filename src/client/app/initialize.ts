import React from 'react';
import { Switch, Route, StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { ToastContainer } from 'react-toastify';
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

declare global {
    interface Window {
        __PRELOADED_STATE__: any;
        __BUILD_MODE__: any;
    }
}

export function initializeApp(isClient: boolean, initialReduxState: any = {}) {
    const composeEnhancers = composeWithDevTools({});

    // Начальное значение стейта
    let initialState;
    if (isClient) {
        initialState = window.__PRELOADED_STATE__
    } else {
        initialState = initialReduxState;
    }

    let history;
    if (isClient) {
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

    if (isClient) {
        if (window.__BUILD_MODE__ !== 'production') {
            const loggerReduxLogger = createLogger({
                collapsed: true,
                duration: true,
                diff: true
            });
            middlewares.push(loggerReduxLogger);
        }
    }

    // На серверной стороне мидлвары не нужны
    let middleware = undefined;
    if (isClient) {
        middleware = applyMiddleware(...middlewares);
        if (window.__BUILD_MODE__ !== 'production') {
            middleware = composeEnhancers(middleware);
        }
    }

    const rootReducer = createRootReducer(history);

    const store = createStore(
        rootReducer,
        initialState,
        middleware
    );

    if (isClient) {
        sagaMiddleware.run(rootSaga);
    }

    return {
        store,
        history,
    }
} 
