import { action } from 'typesafe-actions';
import { HtmlTagResponce } from 'Types/index';

export const HTML_ACTION_TYPES = {
    TOGGLE_HTML_TAG_INFO_LOADING: 'TOGGLE_HTML_TAG_INFO_LOADING',
    FETCH_HTML_TAG_INFO: 'FETCH_HTML_TAG_INFO',
    FETCH_HTML_TAG_INFO_SUCCESS: 'FETCH_HTML_TAG_INFO_SUCCESS',
    FETCH_HTML_TAG_INFO_ERROR: 'FETCH_HTML_TAG_INFO_ERROR',
}

// *** fetchHtmlTagInfo *** //

export function fetchHtmlTagInfoAC(htmlTag: string) {
    return {
        type: HTML_ACTION_TYPES.FETCH_HTML_TAG_INFO,
        payload: {
            htmlTag
        }
    }
}

export function fetchHtmlTagInfoSuccessAC(data: HtmlTagResponce) {
    return {
        type: HTML_ACTION_TYPES.FETCH_HTML_TAG_INFO_SUCCESS,
        payload: {
            data
        }
    }
}

export function fetchHtmlTagInfoErrorAC() {
    return {
        type: HTML_ACTION_TYPES.FETCH_HTML_TAG_INFO_ERROR
    }
}

export function toggleHtmlTagInfoLoadingAC(loading: boolean) {
    return {
        type: HTML_ACTION_TYPES.TOGGLE_HTML_TAG_INFO_LOADING,
        payload: {
            loading
        }
    }
}
