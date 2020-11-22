export const HTML_ACTION_TYPES = {
    TOGGLE_HTML_TAG_INFO_LOADING: 'TOGGLE_HTML_TAG_INFO_LOADING',
    FETCH_HTML_TAG_INFO: 'FETCH_HTML_TAG_INFO'
}

export function fetchHtmlTagInfoAC(htmlTag: string) {
    return {
        type: HTML_ACTION_TYPES.FETCH_HTML_TAG_INFO,
        payload: {
            htmlTag
        }
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
