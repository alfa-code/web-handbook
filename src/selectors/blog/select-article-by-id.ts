import get from 'lodash/get';

export function selectBlogArticleById(state, id: string) {
    return get(state, `blog.articles[${id}]`);
}
