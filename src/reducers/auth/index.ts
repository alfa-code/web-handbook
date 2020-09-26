import { getUserParamsActions } from 'Actions/request-actions';

export default function authReducer(state = {}, action) {
    switch (action.type) {
        case getUserParamsActions.types.success: {
            const { payload } = action;
            return {
                ...payload
            }
        }
        default:
            return state
    }
}
