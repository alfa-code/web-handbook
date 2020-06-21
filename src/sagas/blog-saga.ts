import { put, call, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import {
    TYPES,
    getAllBlogPostsSuccessAC,
    getAllBlogPostsErrorAC,

    getBlogPostByIdSuccessAC,
    getBlogPostByIdErrorAC
} from 'Actions/blog-actions';

async function getAllPosts() {
    return await axios.get('/api/get-all-blog-posts')
}

async function getArticleById(id: string) {
    return await axios.get(`/api/get-blog-post-by-id/${id}`)
}

export function* getAllBlogPosts() {
    try {
        const response = yield call(getAllPosts);

        yield put(getAllBlogPostsSuccessAC(response?.data));
    } catch (e) {
        yield put(getAllBlogPostsErrorAC());
    }
}

export function* getBlogPostById(action) {
    const { payload: { id } } = action;

    try {
        const response = yield call(getArticleById, id);

        yield put(getBlogPostByIdSuccessAC(response?.data));
    } catch (e) {
        yield put(getBlogPostByIdErrorAC());
    }
}


export function* blogSagas() {
    yield takeEvery(TYPES.GET_ALL_POSTS_REQUEST, getAllBlogPosts);
    yield takeEvery(TYPES.GET_BLOG_POST_BY_ID_START, getBlogPostById);
}