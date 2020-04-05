import get from 'lodash/get';

export function selectAuthInfo(state) {
    return get(state, 'auth');
}

export function selectIsAuthenticated(state) {
    return get(state, 'auth.isAuthenticated');
}
