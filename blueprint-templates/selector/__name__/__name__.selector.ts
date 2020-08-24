import get from 'lodash/get';

export function select{{pascalCase name}}(state) {
    return get(state, 'somePath', []);
}
