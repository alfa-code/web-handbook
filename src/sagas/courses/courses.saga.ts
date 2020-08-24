import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

import { coursesListGetActions } from 'Actions/request-actions';

export function* fetchCoursesList() {
    const url = '/api/get-courses-list';

    try {
        const { status, data } = yield call(() => axios.get(url));

        if (status === 200) {
            yield put(coursesListGetActions.success(data));
        } else {
            yield put(coursesListGetActions.error(new Error(data)));
        }
    } catch(e) {
        yield put(coursesListGetActions.error(e));
    }
}

export function* coursesSagas() {
    yield takeLatest(coursesListGetActions.types.request, fetchCoursesList);
}
