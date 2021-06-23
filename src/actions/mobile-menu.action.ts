import { action } from 'typesafe-actions';

export const MOBILE_MENU_ACTION_TYPES = {
    TOGGLE_MOBILE_MENU_STATE: 'TOGGLE_MOBILE_MENU_STATE',
}

export const toggleMobileMenuAC = (menuState: boolean) => action(MOBILE_MENU_ACTION_TYPES.TOGGLE_MOBILE_MENU_STATE, { menuState });
