import { call, put, takeLatest } from 'redux-saga/effects'
import axios, { AxiosResponse } from 'axios';

import { HtmlTagResponce } from 'Types/index';

import {
    HTML_ACTION_TYPES,
    toggleHtmlTagInfoLoadingAC,
    fetchHtmlTagInfoSuccessAC,
    fetchHtmlTagInfoErrorAC
} from 'Actions/index';

function mapTagStructureToObject(data: HtmlTagResponce) {
    const { tagName, structure } = data;
    if (!structure) {
        return {}
    }

    const mappedObj: any = {
        tagName
    };
    structure.forEach((item) => {
        const { type, value } = item;
        mappedObj[type] = value;
    });

    return mappedObj;
}

function fetchHtml(htmlTag: string) {
    return axios({
      method: 'get',
      url: `https://raw.githubusercontent.com/alfa-code/web-handbook-materials/main/materials/html/tags/${htmlTag}/main.json`
    });
}

function* fetchHtmlTagInfo(action) {
    yield put(toggleHtmlTagInfoLoadingAC(true));

    const { payload: { htmlTag } } = action;
    try {
        const response: AxiosResponse<HtmlTagResponce> = yield call(fetchHtml, htmlTag);
        const { data } = response;

        const mappedData = mapTagStructureToObject(data);

        if (mappedData) {
            yield put(fetchHtmlTagInfoSuccessAC(mappedData));
            yield put(toggleHtmlTagInfoLoadingAC(false));
        }
    } catch (error) {
        yield put(fetchHtmlTagInfoErrorAC());
        yield put(toggleHtmlTagInfoLoadingAC(false));
    }
}

export function* htmlSaga() {
    yield takeLatest(HTML_ACTION_TYPES.FETCH_HTML_TAG_INFO, fetchHtmlTagInfo);
}
