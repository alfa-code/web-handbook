import { call, put, takeLatest } from 'redux-saga/effects'
import axios, { AxiosResponse } from 'axios';

import { HtmlTagResponce } from 'Types/index';

import {
    fetchHtmlTagInfoAsync,
    fetchFullHtmlElementDescriptionAsync,
} from 'Actions/index';

// TODO: удалить после добавления всех тегов
import Lockr from 'lockr';

let branch = 'main';
let repo = 'alfa-code/web-handbook-materials';

if (typeof window !== 'undefined') {
    branch = Lockr.get('branch') || branch;

    repo = Lockr.get('repo') || repo;
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
        url: `https://raw.githubusercontent.com/${repo}/${branch}/materials/html/tags/${htmlTag}/main.json?`
    });
}

function* fetchHtmlTagInfo(action) {
    const htmlTag = action.payload;
    try {
        const response: AxiosResponse<HtmlTagResponce> = yield call(fetchHtml, htmlTag);
        const { data } = response;

        const mappedData = mapTagStructureToObject(data);

        // Загружаем доп инфу по тегу если это необходимо
        if (mappedData) {
            yield put(fetchHtmlTagInfoAsync.success(mappedData));

            if (mappedData.fullDescription) {
                yield put(fetchFullHtmlElementDescriptionAsync.request(mappedData.tagName))
            }
        }
    } catch (error) {
        yield put(fetchHtmlTagInfoAsync.failure({ elementName: htmlTag, error }));
    }
}

export function* htmlSaga() {
    yield takeLatest(fetchHtmlTagInfoAsync.request, fetchHtmlTagInfo);
}
