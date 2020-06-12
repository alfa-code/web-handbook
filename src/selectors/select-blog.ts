import get from 'lodash/get';

export function selectArticles(state) {
    return get(state, 'blog.articles', []);
}

export function selectBlogIsLoading(state) {
    return get(state, 'blog.loading', false);
}
