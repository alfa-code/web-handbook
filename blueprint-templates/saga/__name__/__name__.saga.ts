import { takeEvery, call, put } from 'redux-saga/effects';

import { TYPES } from 'Actions/some-types';

export function* someFunction(action) {
    yield call(() => {});
}

export function* {{camelCase name}}Sagas() {
    yield takeEvery(TYPES.ERROR, someFunction);
}
