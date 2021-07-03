import { takeEvery, call, put } from 'redux-saga/effects';
import axios, { AxiosResponse, AxiosPromise } from 'axios';
import { fetchHtmlAttributeInfoAsync, fetchHtmlAttributeDescriptionAsync } from 'Actions/html.action';

import { AttributeInfo } from 'Src/types/api/attribute-info';
import { MappedAttributeStructure } from 'Src/types/attributes';

function mapAttributeStructureToObject(data: AttributeInfo): MappedAttributeStructure {
    const { name, structure } = data;

    if (!structure) {
        return null;
    }

    const mappedObj: any = {
        name
    };

    structure.forEach((item) => {
        const { type, value } = item;
        mappedObj[type] = value;
    });

    return mappedObj;
}

function fetchHtmlAttributeInfo(asttributeName: string): AxiosPromise<AttributeInfo> {
    return axios({
        method: 'get',
        url: `https://raw.githubusercontent.com/alfa-code/web-handbook-materials/main/materials/html/attributes/${asttributeName}/main.json`
    });
}

function fetchHtmlAttributeDescription(asttributeName: string): AxiosPromise<string> {
    return axios({
        method: 'get',
        url: `https://raw.githubusercontent.com/alfa-code/web-handbook-materials/main/materials/html/attributes/${asttributeName}/description.md`
    });
}

function* fetchHtmlAttributeInfoSaga(action) {
    const asttributeName = action.payload;

    try {
        const { data }: AxiosResponse<AttributeInfo> = yield call(fetchHtmlAttributeInfo, asttributeName);

        if (data) {
            const mappedData = mapAttributeStructureToObject(data);

            if (mappedData && mappedData.fullDescription) {
                yield put(fetchHtmlAttributeDescriptionAsync.request(asttributeName));
            }

            if (mappedData) {
                yield put(fetchHtmlAttributeInfoAsync.success(mappedData));
            }
        }
    } catch (e) {
        console.log(e);
        yield put(fetchHtmlAttributeInfoAsync.failure(e));
    }
}

function* fetchHtmlAttributeDescriptionSaga(action) {
    const asttributeName = action.payload;

    try {
        const { data }: AxiosResponse<string> = yield call(fetchHtmlAttributeDescription, asttributeName);

        if (data) {
            yield put(fetchHtmlAttributeDescriptionAsync.success({
                name: asttributeName,
                data
            }));
        }
    } catch (e) {
        console.log(e);
        yield put(fetchHtmlAttributeDescriptionAsync.failure(e));
    }
}

export function* htmlAttributesSagas() {
    yield takeEvery(fetchHtmlAttributeInfoAsync.request, fetchHtmlAttributeInfoSaga);
    yield takeEvery(fetchHtmlAttributeDescriptionAsync.request, fetchHtmlAttributeDescriptionSaga)
}
