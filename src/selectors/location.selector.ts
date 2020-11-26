import get from 'lodash/get';

export function selectPathname(state) {
    return get(state, ['router', 'location', 'pathname']);
}
