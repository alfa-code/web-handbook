import get from 'lodash/get';

export function selectIsHtmlTagsInfoLoading(state): boolean {
    return get(state, ['data', 'htmlTagsInfo', 'isLoading'], false);
}

export function selectHtmlTagInfo(state, htmlTag: string) {
    return get(state, ['data', 'htmlTagsInfo', 'list', htmlTag]);
}

