import { all } from 'redux-saga/effects';
import { htmlSaga } from './html.saga';

export function* rootSaga() {
    yield all([
        htmlSaga(),
    ]);
}
