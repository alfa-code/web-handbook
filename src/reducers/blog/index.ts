import { TYPES } from 'Actions/blog-actions';

type BlogReducerType = {
    loading: boolean;
    articles: any;
};

const initialState = {
    loading: false,
    articles: {

    }
};

export default function blogReducer(state: BlogReducerType = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case TYPES.GET_ALL_POSTS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case TYPES.GET_ALL_POSTS_SUCCESS:
            return {
                ...state,
                articlesList: payload,
                loading: false
            }
        case TYPES.GET_ALL_POSTS_ERROR:
            return {
                ...state,
                loading: false
            }
        case TYPES.GET_BLOG_POST_BY_ID_SUCCESS:
            return {
                ...state,
                articles: {
                    ...state.articles,
                    [payload.post_id]: payload
                }
            }
        default:
            return state
    }
}
