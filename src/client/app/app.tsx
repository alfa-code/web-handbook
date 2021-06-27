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

import {
    HtmlListContainer,
    CssListContainer,
    TagPageContainer
} from 'Containers/index';

import { createRootReducer } from 'Src/reducers';

import { rootSaga } from 'Src/sagas';

import {
    Main,
    NotFound,
    Recipes,
    Attribute,
    Category,
    RecipesTheme,
    Recipe,
    Property
} from 'Pages/index';

import CONSTANTS from './constants';

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
            <>
                <Switch>
                    <Route
                        exact
                        path='/'
                        component={ Main }
                    />
                    <Route
                        exact
                        path='/html-list'
                        component={ HtmlListContainer }
                    />
                    <Route
                        exact
                        path='/html-list/recipes'
                        component={ () => <Recipes themes={ CONSTANTS.themes }  type="html" /> }
                    />
                    <Route
                        exact
                        path='/html-list/:htmlTag'
                        component={ TagPageContainer }
                    />

                    {/* TODO: Этот функционал выкатим вторым этапом */}
                    <Route
                        exact
                        path='/css-list'
                        component={ CssListContainer }
                    />
                    <Route
                        exact
                        path='/css-list/recipes'
                        component={ () => <Recipes themes={ CONSTANTS.themes }  type="css" /> }
                    />
                    <Route
                        exact
                        path='/css-list/:cssRule'
                        component={ () => <Property /> }
                    />

                    {/* TODO: Статьи выкатим третьим этапом */}
                    <Route
                        exact
                        path='/recipes/theme'
                        component={ () => <RecipesTheme
                            theme={CONSTANTS.themes[0]}  type="html" /> }
                    />
                    <Route
                        exact
                        path='/recipes/theme/recipe'
                        component={ () => <Recipe
                            type="html"
                            title="Как убрать полосы прокрутки?" /> }
                    />
                    <Route
                        exact
                        path='/tag-types'
                        component={ () => <Category
                            type="html"
                            title={CONSTANTS.tagTypes.title}
                            types={CONSTANTS.tagTypes.types} /> }
                    />
                    <Route
                        exact
                        path='/attribute-list'
                        component={ () => <Attribute /> }
                    />
                    <Route
                        exact
                        path='/attribute-list/:attribute'
                        component={ () => <Attribute /> }
                    />
                    <Route
                        exact
                        path='/category'
                        component={ () => <Category
                            type="css"
                            title={CONSTANTS.tagTypes.title}
                            types={CONSTANTS.tagTypes.types} /> }
                    />
                    <Route
                        path='*'
                        component={ NotFound }
                    />
                </Switch>
            </>
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


