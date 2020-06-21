import { TYPES } from 'Actions/ui/change-password-actions';
import { createUIRequestReducer } from 'Utils/redux/create-ui-request-reducer';
import { changePassword } from 'Actions/request-actions';

export function hintVisibilityReducer(state= false, action) {
    switch (action.type) {
        case TYPES.PASSWORD_VALIDATION_HINT_SET_VISIBILITY:
            return action.payload;
        default:
            return state
    }
}

export const changePasswordReducer = createUIRequestReducer(changePassword);
