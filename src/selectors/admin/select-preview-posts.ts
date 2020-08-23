import get from 'lodash/get';

export function selectPreviewArticles(state) {
    return get(state, 'admin.previewPosts', []);
}
