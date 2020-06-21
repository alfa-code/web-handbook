import { combineReducers } from 'redux';

import counterReducer from 'Reducers/counter';
import authReducer from 'Reducers/auth';
import blogReducer from 'Reducers/blog';
import { userParamsReducer } from 'Reducers/user-params';

import { hintVisibilityReducer, changePasswordReducer} from 'Reducers/ui/hint-visibility-reducer';
import { uiUserParamsChange, uiUserParamsGet } from 'Reducers/ui/user-params-ui-reducer';

const rootReducer = combineReducers({
    counter: counterReducer,
    auth: authReducer,
    UI: combineReducers({
        changePassword: combineReducers({
            hintVisible: hintVisibilityReducer,
            sending: changePasswordReducer,
        }),
        userParams: combineReducers({
            sending: uiUserParamsChange,
            loading: uiUserParamsGet,
        }),
    }),
    user: combineReducers({
        params: userParamsReducer,
    }),
    blog: blogReducer,
});

export default rootReducer;
