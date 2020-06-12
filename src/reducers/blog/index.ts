import { TYPES } from 'Actions/blog-actions';

type BlogReducerType = {
    loading: boolean;
};

const initialState = {
    loading: false,
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
                articles: payload,
                loading: false
            }
        case TYPES.GET_ALL_POSTS_ERROR:
            return {
                ...state,
                loading: false
            }
        default:
            return state
    }
}
