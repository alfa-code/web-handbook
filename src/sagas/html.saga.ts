import { call, put, takeLatest } from 'redux-saga/effects'
import axios, { AxiosResponse } from 'axios';

import { HtmlTagResponce } from 'Types/index';

import {
    toggleHtmlTagInfoLoadingAC,
    fetchHtmlTagInfoAsync,
    fetchFullHtmlElementDescriptionAsync,
} from 'Actions/index';

// TODO: удалить после добавления всех тегов
import Lockr from 'lockr';
let branch: string = 'main';
if (typeof window !== 'undefined') {
    branch = Lockr.get('branch') || 'main';
}

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
        url: `https://raw.githubusercontent.com/alfa-code/web-handbook-materials/${branch}/materials/html/tags/${htmlTag}/main.json`
    });
}

function* fetchHtmlTagInfo(action) {
    yield put(toggleHtmlTagInfoLoadingAC(true));

    const htmlTag = action.payload;
    try {
        const response: AxiosResponse<HtmlTagResponce> = yield call(fetchHtml, htmlTag);
        const { data } = response;

        const mappedData = mapTagStructureToObject(data);

        // Загружаем доп инфу по тегу если это необходимо
        if (mappedData) {
            yield put(fetchHtmlTagInfoAsync.success(mappedData));
            yield put(toggleHtmlTagInfoLoadingAC(false));

            if (mappedData.fullDescription) {
                yield put(fetchFullHtmlElementDescriptionAsync.request(mappedData.tagName))
            }
        }
    } catch (error) {
        yield put(fetchHtmlTagInfoAsync.failure(error));
        yield put(toggleHtmlTagInfoLoadingAC(false));
    }
}

export function* htmlSaga() {
    // yield takeLatest(HTML_ACTION_TYPES.FETCH_HTML_TAG_INFO, fetchHtmlTagInfo);
    yield takeLatest(fetchHtmlTagInfoAsync.request, fetchHtmlTagInfo);
}
