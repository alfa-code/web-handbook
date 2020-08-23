import {
    ADMIN_ACTION_TYPES,
} from 'Actions/admin/admin-actions';

import { PostsPreviewArray } from 'Types/common';
import { Action } from 'Types/actions';

interface IinitalState {
    previewPosts: PostsPreviewArray;
}

const initialState: IinitalState = {
    previewPosts: []
}

export function adminReducer(state = initialState, action: Action): IinitalState {
    const { type, payload } = action;

    switch (type) {
        case ADMIN_ACTION_TYPES.FETCH_ALL_PREVIEW_POSTS_SUCCESS:
            return {
                ...state,
                previewPosts: [
                    ...payload
                ]
            }
        case ADMIN_ACTION_TYPES.FETCH_ALL_PREVIEW_POSTS_ERROR:
            return {
                ...state,
                previewPosts: []
            }
        default:
            return state
    }
}
