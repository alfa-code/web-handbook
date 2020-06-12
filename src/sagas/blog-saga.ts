import { put, call, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import { TYPES, getAllBlogPostsSuccessAC, getAllBlogPostsErrorAC } from 'Actions/blog-actions';

async function getAllPosts() {
    return await axios.get('/api/get-all-blog-posts')
}

export function* getAllBlogPosts() {
    try {
        const response = yield call(getAllPosts);

        yield put(getAllBlogPostsSuccessAC(response?.data));
    } catch (e) {
        yield put(getAllBlogPostsErrorAC());
    }
}

export function* blogSagas() {
    yield takeEvery(TYPES.GET_ALL_POSTS_REQUEST, getAllBlogPosts);
}
