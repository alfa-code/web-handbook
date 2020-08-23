import { Action } from 'Types/actions';

import { PostsPreviewArray } from 'Types/common';

export const ADMIN_ACTION_TYPES = {
    FETCH_ALL_PREVIEW_POSTS: 'FETCH_ALL_PREVIEW_POSTS',
    FETCH_ALL_PREVIEW_POSTS_SUCCESS: 'FETCH_ALL_PREVIEW_POSTS_SUCCESS',
    FETCH_ALL_PREVIEW_POSTS_ERROR: 'FETCH_ALL_PREVIEW_POSTS_ERROR',

    FETCH_POST_FOR_EDITING: 'FETCH_POST_FOR_EDITING',

    // Удаление статьи по ID
    DELETE_ARTICLE_BY_ID_START:  'DELETE_ARTICLE_BY_ID_START',
    DELETE_ARTICLE_BY_ID_SUCCESS:  'DELETE_ARTICLE_BY_ID_SUCCESS',
    DELETE_ARTICLE_BY_ID_ERROR:  'DELETE_ARTICLE_BY_ID_ERROR',

    // Редактирование статьи по ID
    EDIT_ARTICLE_BY_ID_START:  'EDIT_ARTICLE_BY_ID_START',
    EDIT_ARTICLE_BY_ID_SUCCESS:  'EDIT_ARTICLE_BY_ID_SUCCESS',
    EDIT_ARTICLE_BY_ID_ERROR:  'EDIT_ARTICLE_BY_ID_ERROR',

    // Создание статьи
    CREATE_ARTICLE_START:  'CREATE_ARTICLE_START',
    CREATE_ARTICLE_SUCCESS:  'CREATE_ARTICLE_SUCCESS',
    CREATE_ARTICLE_ERROR:  'CREATE_ARTICLE_ERROR',
}

export function fetchAllPreviewPostsAC(): Action {
    return {
        type: ADMIN_ACTION_TYPES.FETCH_ALL_PREVIEW_POSTS
    }
}

export function fetchAllPreviewPostsSuccessAC(payload: PostsPreviewArray): Action {
    return {
        type: ADMIN_ACTION_TYPES.FETCH_ALL_PREVIEW_POSTS_SUCCESS,
        payload
    }
}

export function fetchAllPreviewPostsErrorAC(): Action {
    return {
        type: ADMIN_ACTION_TYPES.FETCH_ALL_PREVIEW_POSTS_ERROR
    }
}

export function fetchPostForEditing(): Action {
    return {
        type: ADMIN_ACTION_TYPES.FETCH_POST_FOR_EDITING
    }
}

/*** Создание статьи ***/
export function createArticleByIdStartAC(payload): Action {
    return {
        type: ADMIN_ACTION_TYPES.CREATE_ARTICLE_START,
        payload
    }
}

export function createArticleSuccessAC(): Action {
    return {
        type: ADMIN_ACTION_TYPES.CREATE_ARTICLE_SUCCESS
    }
}


export function createArticleErrorAC(): Action {
    return {
        type: ADMIN_ACTION_TYPES.CREATE_ARTICLE_ERROR
    }
}

/*** Редактирование статьи ***/

type editArticlePayload = {
    postId: number;
    title: string;
    imageAddress: string;
    description: string;
    content: string;
}

export function editArticleByIdStartAC(payload: editArticlePayload): Action {
    return {
        type: ADMIN_ACTION_TYPES.EDIT_ARTICLE_BY_ID_START,
        payload: {
            ...payload,
            post_id: payload.postId,
        }
    }
}

export function editArticleByIdSuccessAC(): Action {
    return {
        type: ADMIN_ACTION_TYPES.EDIT_ARTICLE_BY_ID_SUCCESS
    }
}

export function editArticleByIdErrorAC(): Action {
    return {
        type: ADMIN_ACTION_TYPES.EDIT_ARTICLE_BY_ID_ERROR
    }
}



/*** Удаление статьи ***/

export function deleteArticleByIdStartAC(id: number): Action {
    return {
        type: ADMIN_ACTION_TYPES.DELETE_ARTICLE_BY_ID_START,
        payload: id
    }
}

export function deleteArticleByIdSuccessAC(): Action {
    return {
        type: ADMIN_ACTION_TYPES.DELETE_ARTICLE_BY_ID_SUCCESS,
    }
}

export function deleteArticleByIdErrorAC(): Action {
    return {
        type: ADMIN_ACTION_TYPES.FETCH_ALL_PREVIEW_POSTS_ERROR,
    }
}
