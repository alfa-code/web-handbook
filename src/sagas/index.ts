import { all } from 'redux-saga/effects';
import { htmlSaga } from './html.saga';
import { htmlElementFullDescriptionSagas } from './html-element-full-description/html-element-full-description.saga';

export function* rootSaga() {
    yield all([
        htmlSaga(),
        htmlElementFullDescriptionSagas(),
    ]);
}
