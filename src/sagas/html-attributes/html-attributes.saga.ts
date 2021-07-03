import { takeEvery, call, put } from 'redux-saga/effects';
import axios, { AxiosResponse, AxiosPromise } from 'axios';
import { fetchHtmlAttributeInfoAsync } from 'Actions/html.action';

import { AttributeInfo } from 'Src/types/api/attribute-info';

import { v1 as uuidv1 } from 'uuid';


function fetchHtmlAttributeInfo(asttributeName: string): AxiosPromise<AttributeInfo> {
    return axios({
        method: 'get',
        url: `https://raw.githubusercontent.com/alfa-code/web-handbook-materials/main/materials/html/attributes/${asttributeName}/main.json?${uuidv1()}`
    });
}

function* fetchHtmlAttributeInfoSaga(action) {
    const asttributeName = action.payload;

    try {
        const { data }: AxiosResponse<AttributeInfo> = yield call(fetchHtmlAttributeInfo, asttributeName);

        if (data) {
            yield put(fetchHtmlAttributeInfoAsync.success(data));
        }
    } catch (e) {
        console.log(e);
        yield put(fetchHtmlAttributeInfoAsync.failure(e));
    }
}

export function* htmlAttributesSagas() {
    yield takeEvery(fetchHtmlAttributeInfoAsync.request, fetchHtmlAttributeInfoSaga);
}
