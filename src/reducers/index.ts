import { combineReducers } from 'redux';

import authReducer from 'Reducers/auth';
import { adminReducer } from 'Reducers/admin';

import blogReducer from 'Reducers/blog';
import { userParamsReducer } from 'Reducers/user-params';
import { userCoursesReducer } from 'Reducers/user-courses.reducer';

import { hintVisibilityReducer, changePasswordReducer } from 'Reducers/ui/hint-visibility-reducer';
import { uiUserParamsChange, uiUserParamsGet } from 'Reducers/ui/user-params-ui-reducer';
import { uiCoursesListGet } from 'Reducers/ui/courses-ui.reducer';
import { uiHeaderReducer }  from 'Reducers/ui/header.reducer';

import { coursesReducer } from 'Reducers/courses/courses.reducer';

const rootReducer = combineReducers({
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
        courses: combineReducers({
            loading: uiCoursesListGet
        }),
        header: uiHeaderReducer
    }),
    user: combineReducers({
        params: userParamsReducer,
        courses: userCoursesReducer,
    }),
    blog: blogReducer,
    courses: coursesReducer,
    admin: adminReducer,
});

export default rootReducer;
