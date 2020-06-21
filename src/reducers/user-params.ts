import { AnyAction } from 'redux';
import { userParamsGet } from 'Actions/request-actions';


export function userParamsReducer(state = {}, action: AnyAction) {
    switch (action.type) {
        case userParamsGet.types.success:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
}
