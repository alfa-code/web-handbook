import get from 'lodash/get';

export function selectIsHtmlTagsInfoLoading(state): boolean {
    return get(state, ['UI', 'htmlTagsInfo', 'isLoading'], false);
}

export function selectHtmlTagInfo(state, htmlTag: string) {
    return get(state, ['UI', 'htmlTagsInfo', 'list', htmlTag]);
}

