import { takeEvery, call, put } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import { fetchFullHtmlElementDescriptionAsync } from 'Actions/html.action';

// TODO: удалить после добавления всех тегов
import Lockr from 'lockr';

let branch = 'main';

if (typeof window !== 'undefined') {
    branch = Lockr.get('branch') || 'main';
}

function fetchHtmlElementFullDescription(htmlTag: string) {
    return axios({
        method: 'get',
        url: `https://raw.githubusercontent.com/alfa-code/web-handbook-materials/${branch}/materials/html/tags/${htmlTag}/description.md`
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
