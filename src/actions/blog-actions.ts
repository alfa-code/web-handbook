export const TYPES = {
    GET_ALL_POSTS_REQUEST: 'GET_ALL_POSTS_REQUEST',
    GET_ALL_POSTS_SUCCESS: 'GET_ALL_POSTS_SUCCESS',
    GET_ALL_POSTS_ERROR: 'GET_ALL_POSTS_ERROR',
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
