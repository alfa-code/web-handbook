import get from 'lodash/get';

export function selectHtmlTagsList(state) {
    return get(state, ['UI', 'htmlTags'], {});
}
