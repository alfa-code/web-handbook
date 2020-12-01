import { MOBILE_MENU_ACTION_TYPES } from 'Actions/index';

type InitialState = {
    isOpened: boolean
}

const initialState: InitialState = {
    isOpened: false
}

export function mobileMenuReducer(state = initialState, action) {
    switch (action.type) {
        case MOBILE_MENU_ACTION_TYPES.TOGGLE_MOBILE_MENU_STATE: {
            const { payload: { menuState } } = action;

            return {
                isOpened: menuState
            }
        }
        default:
            return {
                ...state
            }
        }
  }
