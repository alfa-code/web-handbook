import { combineReducers } from 'redux';
import { History } from 'history';
import { connectRouter } from 'connected-react-router';

import { htmlListReducer } from './html-list.reducer';
import { htmlInfoReducer } from './html-info.reducer';

export const createRootReducer = (history: History<any>) => combineReducers({
    router: connectRouter(history),
    UI: combineReducers({
        htmlTagsList: htmlListReducer,
        htmlTagsInfo: htmlInfoReducer,
    }),
});
