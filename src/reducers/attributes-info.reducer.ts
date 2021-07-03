import { createReducer } from 'typesafe-actions';

import { AttributeInfo } from 'Src/types/api/attribute-info';

import {
    // HTML_ACTION_TYPES,
    // fetchHtmlTagInfoAsync,
    fetchHtmlAttributeInfoAsync,
} from 'Actions/index';


type InitialState = {
    isLoading: boolean;
    list: {
        [key: string]: {
            [key: string]: AttributeInfo
        }
    }
}

const initialState: InitialState = {
    isLoading: false,
    list: {}
}

export const attributesInfoReducer = createReducer(initialState)
    .handleAction(fetchHtmlAttributeInfoAsync.request, (state, _action: ReturnType<typeof fetchHtmlAttributeInfoAsync.request>) => {
        return {
            ...state,
            isLoading: true,
        }
    })
    .handleAction(fetchHtmlAttributeInfoAsync.success, (state, action: ReturnType<typeof fetchHtmlAttributeInfoAsync.success>) => {
        const { payload } = action;
        return {
            ...state,
            isLoading: false,
            list: {
                ...state.list,
                [payload.name]: {
                    ...payload
                }
            }
        }
    })
