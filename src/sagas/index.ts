import { all } from 'redux-saga/effects'

import { changePasswordSagas } from 'Src/sagas/change-password';
import { notifiesSagas } from 'Src/sagas/notify';

export function* rootSaga() {
    yield all([
        changePasswordSagas(),
        notifiesSagas(),
    ])
}
