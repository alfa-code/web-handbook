export const MOBILE_MENU_ACTION_TYPES = {
    TOGGLE_MOBILE_MENU_STATE: 'TOGGLE_MOBILE_MENU_STATE',
}

export function toggleMobileMenuStateAC(menuState: boolean) {
    return {
        type: MOBILE_MENU_ACTION_TYPES.TOGGLE_MOBILE_MENU_STATE,
        payload: {
            menuState
        }
    }
}
