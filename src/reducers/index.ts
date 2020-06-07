import { combineReducers } from 'redux';

import counterReducer from './counter';
import authReducer from './auth';

import uiChangePassword from './ui/change-password-form-reducer';

const rootReducer = combineReducers({
    counter: counterReducer,
    auth: authReducer,
    UI: combineReducers({
        changePassword: uiChangePassword
    })
});

export default rootReducer;
