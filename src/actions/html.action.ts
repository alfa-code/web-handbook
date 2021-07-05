import { createAsyncAction } from 'typesafe-actions';
import { HtmlTagResponce } from 'Types/index';

// import { AttributeInfo } from 'Src/types/api/attribute-info';

import { MappedAttributeStructure } from 'Src/types/attributes';

export const HTML_ACTION_TYPES = {
    TOGGLE_HTML_TAG_INFO_LOADING: 'TOGGLE_HTML_TAG_INFO_LOADING',
}

export const fetchHtmlTagInfoAsync = createAsyncAction(
    'FETCH_HTML_TAG_INFO_REQUEST',
    'FETCH_HTML_TAG_INFO_SUCCESS',
    'FETCH_HTML_TAG_INFO_ERROR',
    'FETCH_HTML_TAG_INFO_CANCEL',
)<string, HtmlTagResponce, { elementName: string, error: Error }, string>();

export const fetchFullHtmlElementDescriptionAsync = createAsyncAction(
    'FETCH_FULL_HTML_ELEMENT_DESCRIPTION_REQUEST',
    'FETCH_FULL_HTML_ELEMENT_DESCRIPTION_SUCCESS',
    'FETCH_FULL_HTML_ELEMENT_DESCRIPTION_ERROR',
    'FETCH_FULL_HTML_ELEMENT_DESCRIPTION_CANCEL',
)<string, {elementName: string; data: string; }, Error, string>();

export function toggleHtmlTagInfoLoadingAC(loading: boolean) {
    return {
        type: HTML_ACTION_TYPES.TOGGLE_HTML_TAG_INFO_LOADING,
        payload: {
            loading
        }
    }
}

export const fetchHtmlAttributeInfoAsync = createAsyncAction(
    'FETCH_HTML_ATTRIBUTE_INFO_REQUEST',
    'FETCH_HTML_ATTRIBUTE_INFO_SUCCESS',
    'FETCH_HTML_ATTRIBUTE_INFO_ERROR',
    'FETCH_HTML_ATTRIBUTE_INFO_CANCEL',
)<string, MappedAttributeStructure, Error, string>();

export const fetchHtmlAttributeDescriptionAsync = createAsyncAction(
    'FETCH_HTML_ATTRIBUTE_DESCRIPTION_REQUEST',
    'FETCH_HTML_ATTRIBUTE_DESCRIPTION_SUCCESS',
    'FETCH_HTML_ATTRIBUTE_DESCRIPTION_ERROR',
    'FETCH_HTML_ATTRIBUTE_DESCRIPTION_CANCEL',
)<string, { name: string; data: string; }, Error, string>();

