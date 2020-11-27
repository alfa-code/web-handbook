import get from 'lodash/get';

export function selectFeatures(state) {
    return get(state, ['app', 'settings', 'features']);
}
