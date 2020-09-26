import { all } from 'redux-saga/effects'

import { changePasswordSaga } from 'Src/sagas/change-password';
import { notifiesSagas } from 'Src/sagas/notify';
import { userParamsChangeSaga, userParamsGetSaga } from 'Src/sagas/requests-sagas';
import { requestNotifySagas } from 'Src/sagas/request-notify-sagas';
import { blogSagas } from 'Src/sagas/blog-saga';
import { adminSagas } from 'Src/sagas/admin-saga';
import { coursesSagas } from 'Src/sagas/courses/courses.saga';
import { authSagas } from 'Src/sagas/auth/auth.saga';

export function* rootSaga() {
    yield all([
        changePasswordSaga(),
        notifiesSagas(),
        userParamsChangeSaga(),
        userParamsGetSaga(),
        requestNotifySagas(),
        blogSagas(),
        adminSagas(),
        coursesSagas(),
        authSagas()
    ])
}
