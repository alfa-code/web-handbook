import { takeEvery, call, put } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import { fetchFullHtmlElementDescriptionAsync } from 'Actions/html.action';

import { v1 as uuidv1 } from 'uuid';

// TODO: удалить после добавления всех тегов
import Lockr from 'lockr';

let branch = 'main';
let repo = 'alfa-code/web-handbook-materials';

if (typeof window !== 'undefined') {
    branch = Lockr.get('branch') || branch;

    repo = Lockr.get('repo') || repo;
}

function fetchHtmlElementFullDescription(htmlTag: string) {
    return axios({
        method: 'get',
        url: `https://raw.githubusercontent.com/${repo}/${branch}/materials/html/tags/${htmlTag}/description.md?${uuidv1()}`
    });
}

export function* loadAdditionalDataForHtmlElement(action) {
    const elementName = action.payload;

    try {
        const { data }: AxiosResponse<any> = yield call(fetchHtmlElementFullDescription, elementName);

        if (typeof data === 'string') {
            yield put((fetchFullHtmlElementDescriptionAsync.success({
                elementName,
                data,
            })))
        }
    } catch (e) {
        return null;
    }
}

export function* htmlElementFullDescriptionSagas() {
    yield takeEvery(fetchFullHtmlElementDescriptionAsync.request, loadAdditionalDataForHtmlElement);
}
