import { combineReducers } from 'redux';

import counterReducer from './counter';
import authReducer from './auth';
import blogReducer from './blog';

import uiChangePassword from './ui/change-password-form-reducer';

const rootReducer = combineReducers({
    counter: counterReducer,
    auth: authReducer,
    UI: combineReducers({
        changePassword: uiChangePassword
    }),
    blog: blogReducer
});

export default rootReducer;
