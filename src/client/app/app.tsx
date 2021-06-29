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

export class App extends React.Component<Props> {
    getMainContent() {
        return (
            <Layout />
        );
    }

    /**
     * В проекте используется серверный рендеринг. Для серверного роутинга должен использоваться StaticRouter.
     * В случае рендера в браузере используется ConnectedRouter (Роутинг подключен к redux store).
     */
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


