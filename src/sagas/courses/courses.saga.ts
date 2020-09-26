import { takeLatest, call, put, delay } from 'redux-saga/effects';
import axios from 'axios';
import Hoek from '@hapi/hoek';
import { toast } from 'react-toastify';
import { push } from 'connected-react-router';
import { COURSES_ENDPOINTS } from 'Src/constants/endpoints';

import { setAppLoadingAC } from 'Actions/ui/set-app-loading.actions';

import {
    coursesListGetActions,
    courseGetActions,
    saveEditedCourseActions,
    createNewCourseActions,
    deleteCourseByIdActions,
    getUserCoursesActions,
    createUserCourseActions
} from 'Actions/request-actions';

function* fetchCoursesList() {
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

function* fetchCourseById(action) {
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

function* saveEditedCourseById(action) {
    const { payload: { values } } = action;
    const url = `/api/courses/save-edited-course/${values.id}`;

    try {
        const { status, data } = yield call(() => axios.put(url, values));

        if (status === 200) {
            yield put(saveEditedCourseActions.success(data));
            toast.success('Обновление курса прошло успешно!');
        } else {
            yield put(saveEditedCourseActions.error(new Error(data)));
            toast.error('Ошибка! Курс не обновлен.');

        }
    } catch (e) {
        yield put(saveEditedCourseActions.error(e));
        toast.error('Ошибка! Курс не обновлен.');
    }
}

function* createNewCourseById(action) {
    const { payload: { values } } = action;
    const url = `/api/courses/create-new-course`;
    try {
        const { status, data } = yield call(() => axios.post(url, values));

        if (status === 201) {
            yield put(createNewCourseActions.success(data));
            toast.success('Курс создан успешно!');
            window.location.href = '/admin/courses';
        } else {
            yield put(createNewCourseActions.error(new Error(data)));
            toast.error('Ошибка! Курс не сохранен.');
        }
    } catch (e) {
        yield put(createNewCourseActions.error(e));
        toast.error('Ошибка! Курс не сохранен.');
    }
}

function* deleteCourseById(action) {
    const { payload: { values } } = action;
    const url = `/api/courses/delete/${values}`;
    try {
        const { status, data: message } = yield call(() => axios.delete(url));

        if (status === 200) {
            yield put(deleteCourseByIdActions.success(message));
            yield put(coursesListGetActions.request());
            toast.success(message);
        } else {
            yield put(deleteCourseByIdActions.error(new Error(message)));
            toast.error('Ошибка! Курс не удален.');
        }
    } catch (e) {
        yield put(deleteCourseByIdActions.error(e));
        toast.error('Ошибка! Курс не удален.');
    }
}

function* gerUserCourses() {
    yield put(setAppLoadingAC(true));
    const url = '/api/courses/get-user-courses';
    try {
        const { status, data } = yield call(() => axios.get(url));

        if (status === 200) {
            yield put(getUserCoursesActions.success(data));
        } else {
            yield put(getUserCoursesActions.error(new Error(data)));
        }
    } catch (e) {
        yield put(getUserCoursesActions.error(e));
        toast.error('Ошибка! Ну удалось получить список курсов.');
    }
}

function* gerUserCoursesSuccess() {
    yield put(setAppLoadingAC(false));
}

function* gerUserCoursesError() {
    yield put(setAppLoadingAC(false));
}

function* createUserCourse(action) {
    yield put(setAppLoadingAC(true));
    const { payload: { values: id } } = action;
    const url = '/api/courses/create-user-course';
    try {
        const { status, data } = yield call(() => axios.post(url, {
            id
        }));

        if (status === 201) {
            const { startedCourseId } = data;
            yield put(createUserCourseActions.success(startedCourseId));
            toast.success('Поздравляем! Вы начали новый курс.');
        } else {
            yield put(createUserCourseActions.error(new Error(data)));
        }
    } catch (e) {
        yield put(createUserCourseActions.error(e));
        toast.error('Ошибка! Ну удалось начать новый курс.');
    }
}

function* createUserCourseSuccess(action) {
    yield delay(1000);
    yield put(setAppLoadingAC(false));
    yield put(getUserCoursesActions.request());
    const { payload: startedCourseId } = action;
    const href = Hoek.reachTemplate({ course_id: startedCourseId }, COURSES_ENDPOINTS.study);
    yield put(push(href));
}

function* createUserCourseError() {
    yield put(setAppLoadingAC(false));
}

export function* coursesSagas() {
    yield takeLatest(coursesListGetActions.types.request, fetchCoursesList);
    yield takeLatest(courseGetActions.types.request, fetchCourseById);
    yield takeLatest(saveEditedCourseActions.types.request, saveEditedCourseById);
    yield takeLatest(createNewCourseActions.types.request, createNewCourseById);
    yield takeLatest(deleteCourseByIdActions.types.request, deleteCourseById);

    yield takeLatest(getUserCoursesActions.types.request, gerUserCourses);
    yield takeLatest(getUserCoursesActions.types.success, gerUserCoursesSuccess);
    yield takeLatest(getUserCoursesActions.types.error, gerUserCoursesError);

    yield takeLatest(createUserCourseActions.types.request, createUserCourse);
    yield takeLatest(createUserCourseActions.types.success, createUserCourseSuccess);
    yield takeLatest(createUserCourseActions.types.error, createUserCourseError);
}
