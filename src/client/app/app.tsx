import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Layout } from 'Pages/index';

import { initializeApp } from './initialize';

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = any; // ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = any; // typeof store.dispatch

type Props = {
    location?: any;
    context?: any;
    initialReduxState?: any;
}

export class App extends React.Component<Props> {
    /**
     * В проекте используется серверный рендеринг. Для серверного роутинга должен использоваться StaticRouter.
     * В случае рендера в браузере используется ConnectedRouter (Роутинг подключен к redux store).
     */
    render(): any {
        const {
            location,
            context,
            initialReduxState = {}
        } = this.props;

        const isClient = (typeof window !== 'undefined');

        const {
            store,
            history,
        } = initializeApp(isClient, initialReduxState);

        // Client Side
        if (isClient) {
            return (
                <Provider store={ store }>
                    <ConnectedRouter history={ history }>
                        <Layout />
                    </ConnectedRouter>
                </Provider>
            )
        // Server Side
        } else {
            return (
                <Provider store={ store }>
                    <StaticRouter location={ location } context={ context }>
                        <Layout />
                    </StaticRouter>
                </Provider>
            )
            
        }
    }
}


