import { takeEvery, call, put } from 'redux-saga/effects';
import axios, { AxiosResponse, AxiosPromise } from 'axios';
import { fetchHtmlAttributeInfoAsync } from 'Actions/html.action';

import { v1 as uuidv1 } from 'uuid';


function fetchHtmlAttributeInfo(asttributeName: string): AxiosPromise<any> {
    return axios({
        method: 'get',
        url: `https://raw.githubusercontent.com/alfa-code/web-handbook-materials/main/materials/html/attributes/${asttributeName}/main.json?${uuidv1()}`
    });
}

function* fetchHtmlAttributeInfoSaga(action) {
    const asttributeName = action.payload;

    try {
        const { data }: AxiosResponse<any> = yield call(fetchHtmlAttributeInfo, asttributeName);
        console.log('data:', data)
    } catch (e) {
        console.log(e);
    }
}

export function* htmlAttributesSagas() {
    yield takeEvery(fetchHtmlAttributeInfoAsync.request, fetchHtmlAttributeInfoSaga);
}
