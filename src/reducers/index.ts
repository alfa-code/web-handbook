import { combineReducers } from 'redux';
import { History } from 'history';
import { connectRouter } from 'connected-react-router';

import { appReducer } from './app.reducer';
import { htmlListReducer } from './html-list.reducer';
import { htmlInfoReducer } from './html-info.reducer';
import { mobileMenuReducer } from './mobile-menu.reducer';
import { htmlAttributesListReducer } from './html-attributes-list.reducer';

export const createRootReducer = (history: History<any>) => combineReducers({
    app: appReducer,
    router: connectRouter(history),
    data: combineReducers({
        htmlAttributesList: htmlAttributesListReducer,
        htmlTagsList: htmlListReducer,
        htmlTagsInfo: htmlInfoReducer,
    }),
    UI: combineReducers({
        mobileMenu: mobileMenuReducer
    }),
});
