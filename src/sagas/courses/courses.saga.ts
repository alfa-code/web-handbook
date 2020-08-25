import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

import { coursesListGetActions, courseGetActions } from 'Actions/request-actions';

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

export function* fetchCourseById(action) {
    const { payload: { values } } = action;
    const url = `/api/get-course-info/${values}`;

    try {
        const { status, data } = yield call(() => axios.get(url));

        if (status === 200) {
            yield put(courseGetActions.success(data));
        } else {
            yield put(courseGetActions.error(new Error(data)));
        }
    } catch(e) {
        yield put(courseGetActions.error(e));
    }
}

export function* coursesSagas() {
    yield takeLatest(coursesListGetActions.types.request, fetchCoursesList);
    yield takeLatest(courseGetActions.types.request, fetchCourseById);
}
