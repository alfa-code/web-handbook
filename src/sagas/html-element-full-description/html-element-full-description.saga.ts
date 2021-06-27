import { takeEvery, call, put } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import { fetchFullHtmlElementDescriptionAsync } from 'Actions/html.action';

function fetchHtmlElementFullDescription(htmlTag: string) {
    return axios({
        method: 'get',
        url: `https://raw.githubusercontent.com/alfa-code/web-handbook-materials/main/materials/html/tags/${htmlTag}/description.md`
    });
}

export function* loadAdditionalDataForHtmlElement(action) {
    const { payload: elementName } = action;

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
