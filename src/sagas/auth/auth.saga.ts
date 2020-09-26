import { put, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { toast } from 'react-toastify';
import { push } from 'connected-react-router';

import { SERVER_ENDPOINTS, PROFILE_ENDPOINTS } from 'Constants/endpoints';

import {
    registrationActions,
    authActions,
    getUserParamsActions
} from 'Actions/request-actions';

import { setAppLoadingAC } from 'Actions/ui/set-app-loading.actions';


/* registration */

export function* registrationStart(action) {
    const { payload: { values } } = action;

    yield put(setAppLoadingAC(true));

    try {
        const response = yield call(() => axios.post(SERVER_ENDPOINTS.registration, values));
        const { status, data: { message } } = response;

        if ((status === 201) && message) {
            toast.success(message);
            yield put(registrationActions.success());
        } else {
            yield put(registrationActions.error('Что-то пошло не так. Повторите попытку чуть позже.'));
        }
    } catch (e) {
        const { data: { message } } = e.response;
        if (message) {
            yield put(registrationActions.error({
                message
            }));
        } else {
            yield put(registrationActions.error('Что-то пошло не так. Повторите попытку чуть позже.'));
        }
    }
}

export function* registrationSuccess() {
    yield put(setAppLoadingAC(false));
    yield put(getUserParamsActions.request());
    yield put(push(PROFILE_ENDPOINTS.profile));
}

export function* registrationError(action) {
    try {
        const { payload: { message } } = action;
        toast.error(message);
    } catch (e) {
        toast.error('Что-то пошло не так. Повторите попытку чуть позже.');
    }

    yield put(setAppLoadingAC(false));
}

/* authentication */

export function* authenticationStart(action) {
    const { payload: { values } } = action;
    yield put(setAppLoadingAC(true));

    try {
        const response = yield call(() => axios.post(SERVER_ENDPOINTS.auth, values));
        const { status, data: { message } } = response;

        if (status == 200 && message) {
            yield put(authActions.success(message));
        }
    } catch (e) {
        yield put(authActions.error('Что-то пошло не так. Повторите попытку чуть позже.'));
    }
}

export function* authenticationSuccess(action) {
    const { payload: message } = action;
    yield put(setAppLoadingAC(false));
    yield put(push(PROFILE_ENDPOINTS.profile));
    yield put(getUserParamsActions.request());
    toast.success(message);
}

export function* authenticationError(action) {
    try {
        const { payload: { message } } = action;
        toast.error(message);
    } catch (e) {
        toast.error('Что-то пошло не так. Повторите попытку чуть позже.');
    }

    yield put(setAppLoadingAC(false));
}

/* get user auth params */
export function* getUserAuthParamsStart() {
    yield put(setAppLoadingAC(true));

    try {
        const response = yield call(() => axios.get(SERVER_ENDPOINTS.authParams));
        const { status, data } = response;

        if (status == 200) {
            yield put(getUserParamsActions.success(data));
        }
    } catch (e) {
        yield put(getUserParamsActions.error('Что-то пошло не так. Повторите попытку чуть позже.'));
    }
}

export function* getUserAuthParamsSuccess(action) {
    yield put(setAppLoadingAC(false));
}

export function* getUserAuthParamsError() {
    yield put(setAppLoadingAC(false));
}

export function* authSagas() {
    /* registration */
    yield takeLatest(registrationActions.types.request, registrationStart);
    yield takeLatest(registrationActions.types.success, registrationSuccess);
    yield takeLatest(registrationActions.types.error, registrationError);
    /* authentication */
    yield takeLatest(authActions.types.request, authenticationStart);
    yield takeLatest(authActions.types.success, authenticationSuccess);
    yield takeLatest(authActions.types.error, authenticationError);
    /* get user auth params */
    yield takeLatest(getUserParamsActions.types.request, getUserAuthParamsStart);
    yield takeLatest(getUserParamsActions.types.success, getUserAuthParamsSuccess);
    yield takeLatest(getUserParamsActions.types.error, getUserAuthParamsError);

}
