import { TYPES } from 'Actions/ui/set-app-loading.actions';

export function uiAppLoadingReducer(state = false, action) {
    switch (action.type) {
        case TYPES.SET_APP_LOADING:
            return action.payload
        default:
            return state
    }
}
