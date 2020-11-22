import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import axios from 'axios';

import { HTML_ACTION_TYPES, toggleHtmlTagInfoLoadingAC } from 'Actions/index';

function* fetchHtmlTagInfo(_action) {
    yield put(toggleHtmlTagInfoLoadingAC(true));
}

export function* htmlSaga() {
    yield takeEvery(HTML_ACTION_TYPES.FETCH_HTML_TAG_INFO, fetchHtmlTagInfo);
    // yield takeLatest(HTML_ACTION_TYPES.TOGGLE_HTML_TAG_INFO_LOADING, toggle);
}
