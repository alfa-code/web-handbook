import axios from 'axios';

import { takeLatest, put, call, takeEvery, delay } from 'redux-saga/effects';
import {
    changePasswordRequestErrorAC,
    changePasswordRequestSuccessAC,
    TYPES
} from 'Actions/ui/change-password-actions';

import { notifyErrorAC, notifySuccessAC } from 'Actions/notify-actions';

async function changePassword(values) {
    return await axios.patch('/api/change-password', values)
}

export function* sendChangePasswordRequest(action) {
    const { values } = action.payload;

    try {
        const response = yield call(changePassword, values);

        yield put(changePasswordRequestSuccessAC(response?.data))
    } catch (e) {
        yield delay(1000);
        yield put(changePasswordRequestErrorAC(e?.response?.data))
    }
}

export function* changePasswordSuccessSaga(action) {
    yield put(notifySuccessAC(action.payload?.message));
}

export function* changePasswordErrorSaga(action) {
    yield put(notifyErrorAC(action.payload?.message));
}

export function* changePasswordSagas() {
    yield takeLatest(TYPES.CHANGE_PASSWORD_REQUEST_START, sendChangePasswordRequest);
    yield takeEvery(TYPES.CHANGE_PASSWORD_REQUEST_SUCCESS, changePasswordSuccessSaga);
    yield takeEvery(TYPES.CHANGE_PASSWORD_REQUEST_ERROR, changePasswordErrorSaga);
}
