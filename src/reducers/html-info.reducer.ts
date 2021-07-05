import { createReducer } from 'typesafe-actions';

import {
    fetchHtmlTagInfoAsync,
    fetchFullHtmlElementDescriptionAsync,
} from 'Actions/index';

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
    .handleAction(fetchHtmlTagInfoAsync.request, (state, action) => {
        return {
            ...state,
            isLoading: true
        }
    })
    .handleAction(fetchHtmlTagInfoAsync.failure, (state, action) => {
        const { payload: { elementName, error } } = action;
        return {
            ...state,
            isLoading: false,
            list: {
                ...state.list,
                [elementName]: null // null говорит о том что информация загружалась но не была найдена
            }
        }
    })
    .handleAction(fetchHtmlTagInfoAsync.success, (state, action) => {
        const { payload } = action;
        return {
            ...state,
            isLoading: false,
            list: {
                ...state.list,
                [payload.tagName]: {
                    ...payload
                }
            }
        }
    })
    .handleAction(fetchFullHtmlElementDescriptionAsync.request, (state, action) => {
        const { payload: elementName } = action;

        return {
            ...state,
            isLoading: true,
            list: {
                ...state.list,
                [elementName]: {
                    ...state.list[elementName],
                    additionalDescription: {
                        isDataLoaded: false,
                    },
                }
            }
        }
    })
    .handleAction(fetchFullHtmlElementDescriptionAsync.failure, (state, action) => {
        return {
            ...state,
            isLoading: false,
        }
    })
    .handleAction(fetchFullHtmlElementDescriptionAsync.success, (state, action) => {
        const { elementName, data } = action.payload;
        return {
            ...state,
            isLoading: false,
            list: {
                ...state.list,
                [elementName]: {
                    ...state.list[elementName],
                    additionalDescription: {
                        isDataLoaded: true,
                        data
                    },
                }
            }
        }
    });
