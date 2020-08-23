import { put, call, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { toast } from 'react-toastify';

import {
    ADMIN_ACTION_TYPES,
    fetchAllPreviewPostsAC,
    fetchAllPreviewPostsSuccessAC,
    fetchAllPreviewPostsErrorAC,
    deleteArticleByIdSuccessAC,
    deleteArticleByIdErrorAC,
    editArticleByIdSuccessAC,
    editArticleByIdErrorAC,
    createArticleSuccessAC,
    createArticleErrorAC
} from 'Actions/admin/admin-actions';

function* fetchAllPreviewPosts() {
    const url = '/api/get-all-blog-posts';

    try {
        const { status, data } = yield call(() => axios.get(url));

        if (status === 200) {
            const articles = [];

            for (const key in data) {
                articles.push(data[key]);
            }

            yield put(fetchAllPreviewPostsSuccessAC(articles));
            toast.success('Первью статей успешно загружены.');
        } else {
            yield put(fetchAllPreviewPostsErrorAC());
            toast.error('Не удалось загрузить превью статей. Статус ответа: ' + status);
        }
    } catch (e) {
        yield put(fetchAllPreviewPostsErrorAC());
        toast.error('Не удалось загрузить превью статей.');
    }
}

function* editArticleById(action) {
    try {
        const { payload } = action;
        const url = `/api/update-blog-article`;

        const { status, data: message } = yield call(() => axios.put(url, payload));

        if (status === 200) {
            yield put(editArticleByIdSuccessAC());
            toast.success(message);
            window.location.href = '/admin/blog';
        } else {
            yield put(editArticleByIdErrorAC());
            toast.error(`${message} Статус ответа: ${status}`);
        }
    } catch (e) {
        put(editArticleByIdErrorAC());
        toast.error('Ну удалось удалить статью!');
    }
}

function* deleteArticleById(action) {
    try {
        const { payload: articleId } = action;
        const url = `/api/delete-blog-article/${articleId}`;

        const { status, data: message } = yield call(() => axios.delete(url));

        if (status === 200) {
            put(deleteArticleByIdSuccessAC());
            toast.success(message);
            yield put(fetchAllPreviewPostsAC());
        } else {
            put(deleteArticleByIdErrorAC());
            toast.error(message);
        }
    } catch (e) {
        put(deleteArticleByIdErrorAC());
        toast.error('Ну удалось удалить статью!');
    }
}

function* createArticleStart(action) {
    const { data, url } = action.payload;

    try {
        const { status, data: message } = yield call(() => axios.post(url, data));
        if (status === 201) {
            yield put(createArticleSuccessAC());
            toast.success(message);
            window.location.href = '/admin/blog';
        } else {
            yield put(createArticleSuccessAC());
            toast.error(message);
        }
    } catch (e) {
        toast.error('Не удалось создать статью.');
        yield put(createArticleSuccessAC());
    createArticleErrorAC
    }
}

export function* adminSagas(): any {
    yield takeEvery(ADMIN_ACTION_TYPES.FETCH_ALL_PREVIEW_POSTS, fetchAllPreviewPosts);
    yield takeEvery(ADMIN_ACTION_TYPES.DELETE_ARTICLE_BY_ID_START, deleteArticleById);
    yield takeEvery(ADMIN_ACTION_TYPES.EDIT_ARTICLE_BY_ID_START, editArticleById);
    yield takeEvery(ADMIN_ACTION_TYPES.CREATE_ARTICLE_START, createArticleStart);
}
