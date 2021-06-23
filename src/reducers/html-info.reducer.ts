import { createReducer } from 'typesafe-actions';

import { HTML_ACTION_TYPES, fetchHtmlTagInfoAsync } from 'Actions/index';


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

export const htmlInfoReducer = createReducer(initialState)
    .handleAction(fetchHtmlTagInfoAsync.success, (state, action) => {
        const { payload } = action;
        return {
            ...state,
            list: {
                ...state.list,
                [payload.tagName]: {
                    ...payload
                }
            }
        }
    })
    .handleAction(HTML_ACTION_TYPES.TOGGLE_HTML_TAG_INFO_LOADING, (state, action) => {
        const { loading } = action.payload;
        return {
            ...state,
            isLoading: loading
        }
    });
