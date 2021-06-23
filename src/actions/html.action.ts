import { createAsyncAction } from 'typesafe-actions';
import { HtmlTagResponce } from 'Types/index';

export const HTML_ACTION_TYPES = {
    TOGGLE_HTML_TAG_INFO_LOADING: 'TOGGLE_HTML_TAG_INFO_LOADING',
}

export const fetchHtmlTagInfoAsync = createAsyncAction(
    'FETCH_HTML_TAG_INFO_REQUEST',
    'FETCH_HTML_TAG_INFO_SUCCESS',
    'FETCH_HTML_TAG_INFO_ERROR',
    'FETCH_HTML_TAG_INFO_CANCEL',
)<string, HtmlTagResponce, Error, string>();

export function toggleHtmlTagInfoLoadingAC(loading: boolean) {
    return {
        type: HTML_ACTION_TYPES.TOGGLE_HTML_TAG_INFO_LOADING,
        payload: {
            loading
        }
    }
}
