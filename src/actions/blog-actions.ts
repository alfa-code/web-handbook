export const TYPES = {
    GET_ALL_POSTS_REQUEST: 'GET_ALL_POSTS_REQUEST',
    GET_ALL_POSTS_SUCCESS: 'GET_ALL_POSTS_SUCCESS',
    GET_ALL_POSTS_ERROR: 'GET_ALL_POSTS_ERROR',

    GET_BLOG_POST_BY_ID_START: 'GET_BLOG_POST_BY_ID_START',
    GET_BLOG_POST_BY_ID_SUCCESS: 'GET_BLOG_POST_BY_ID_SUCCESS',
    GET_BLOG_POST_BY_ID_ERROR: 'GET_BLOG_POST_BY_ID_ERROR',
}

export function getAllBlogPostsAC() {
    return {
        type: TYPES.GET_ALL_POSTS_REQUEST
    }
}

export function getAllBlogPostsSuccessAC(articles) {
    return {
        type: TYPES.GET_ALL_POSTS_SUCCESS,
        payload: articles
    }
}

export function getAllBlogPostsErrorAC() {
    return {
        type: TYPES.GET_ALL_POSTS_ERROR
    }
}

export function getBlogPostByIdAC(id: string) {
    return {
        type: TYPES.GET_BLOG_POST_BY_ID_START,
        payload: {
            id
        }
    }
}

export function getBlogPostByIdSuccessAC(article: any) {
    return {
        type: TYPES.GET_BLOG_POST_BY_ID_SUCCESS,
        payload: article
    }
}

export function getBlogPostByIdErrorAC() {
    return {
        type: TYPES.GET_BLOG_POST_BY_ID_ERROR
    }
}
