import { TYPES } from 'Actions/ui/change-password-actions';

type ChangePasswordFormReducerType = Partial<{
    hintVisible: boolean;
    sending: boolean;
}>;

const initialState = {
    hintVisible: false,
    sending: false
};

export default function changePasswordFormReducer(state: ChangePasswordFormReducerType = initialState, action) {
    switch (action.type) {
        case TYPES.PASSWORD_VALIDATION_HINT_SET_VISIBILITY:
            return {
                ...state,
                hintVisible: action.payload
            }
        case TYPES.CHANGE_PASSWORD_REQUEST_START:
            return {
                ...state,
                sending: true,
            }
        case TYPES.CHANGE_PASSWORD_REQUEST_SUCCESS:
        case TYPES.CHANGE_PASSWORD_REQUEST_ERROR:
            return {
                ...state,
                sending: false,
            }
        default:
            return state
    }
}
