import { toast } from 'react-toastify';
import { takeEvery, call } from 'redux-saga/effects';

import { TYPES } from 'Actions/notify-actions';

export function* successNotifySaga(action) {
    yield call(toast.success, action.payload?.message);
}

export function* errorNotifySaga(action) {
    yield call(toast.error, action.payload?.message);
}

export function* notifiesSagas() {
    yield takeEvery(TYPES.SUCCESS, successNotifySaga);
    yield takeEvery(TYPES.ERROR, errorNotifySaga);
}
