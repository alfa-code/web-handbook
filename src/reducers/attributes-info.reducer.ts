import { createReducer } from 'typesafe-actions';

import { AttributeInfo } from 'Src/types/api/attribute-info';

import {
    fetchHtmlAttributeInfoAsync,
    fetchHtmlAttributeDescriptionAsync,
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
    .handleAction(fetchHtmlAttributeInfoAsync.failure, (state, _action: ReturnType<typeof fetchHtmlAttributeInfoAsync.failure>) => {
        return {
            ...state,
            isLoading: false,
        }
    })
    .handleAction(fetchHtmlAttributeDescriptionAsync.success, (state, action: ReturnType<typeof fetchHtmlAttributeDescriptionAsync.success>) => {
        const { payload: { name, data } } = action;

        return {
            ...state,
            list: {
                ...state.list,
                [name]: {
                    ...state.list[name],
                    additionalDescription: data
                }
            }
        }
    });
