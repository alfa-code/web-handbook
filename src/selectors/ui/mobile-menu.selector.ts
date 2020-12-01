import get from 'lodash/get';

export function selectMobileMenuState(state) {
    return get(state, ['UI', 'mobileMenu', 'isOpened'], false);
}
