import { put, takeEvery } from 'redux-saga/effects';

import { notifyErrorAC, notifySuccessAC } from 'Actions/notify-actions';
import {
    changePassword,
    userParamsChange,
    userParamsGet
} from 'Actions/request-actions';
import { successNotifySaga } from 'Src/sagas/notify';

export function* requestSuccessNotifySaga(action) {
    yield put(notifySuccessAC(action.payload?.message));
}

export function* requestErrorNotifySaga(action) {
    yield put(notifyErrorAC(action.payload?.message));
}

export function* requestNotifySagas() {
    yield takeEvery(userParamsChange.types.success, requestSuccessNotifySaga);
    yield takeEvery(userParamsChange.types.error, requestErrorNotifySaga);
    yield takeEvery(userParamsGet.types.error, requestErrorNotifySaga);
    yield takeEvery(changePassword.types.success, successNotifySaga);
    yield takeEvery(changePassword.types.error, requestErrorNotifySaga);
}
