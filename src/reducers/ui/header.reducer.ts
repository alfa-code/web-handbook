import { TYPES } from 'Actions/ui/header-actions';

export function uiHeaderReducer(state = { menuOpened: false }, action) {
    switch (action.type) {
        case TYPES.CHANGE_HEADER_MENU_VISABILITY:
            return {
                ...state,
                menuOpened: action.payload
            };
        default:
            return state
    }
}
