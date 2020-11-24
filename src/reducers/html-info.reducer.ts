import { Action } from 'Types/index';

import { HTML_ACTION_TYPES } from 'Actions/index';

type InitialState = {
    isLoading: boolean;
    list: {
        [key: string]: {
            [key: string]: any
        }
    }
}

const initialState: InitialState = {
    isLoading: false,
    list: {}
}

export function htmlInfoReducer(state = initialState, action: Action) {
    switch (action.type) {
        case HTML_ACTION_TYPES.TOGGLE_HTML_TAG_INFO_LOADING: {
            const { loading } = action.payload;
            return {
                ...state,
                isLoading: loading
            }
        }
        case HTML_ACTION_TYPES.FETCH_HTML_TAG_INFO_SUCCESS: {
            const { data } = action.payload;
            return {
                ...state,
                list: {
                    ...state.list,
                    [data.tagName]: {
                        ...data
                    }
                }
            }
        }
        default:
            return {
                ...state
            }
        }
  }
