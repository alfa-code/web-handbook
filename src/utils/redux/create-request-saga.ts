import { debounce, takeLatest, put, call, delay } from 'redux-saga/effects';

import { RequestActions } from 'Src/utils/redux/create-request-actions';

import { AnyFunction } from 'Types/functions';

/**
 * Создание типового saga-генератора для асинхронных действий
 * @param actions - объект с коллекцией типовых action creator-ов
 * @param requestFunc - асинхронная функция
 * @param deb - ограничение на частоту выполнения асинхронной функции (возможно стоит сделать отдельный объект с настройками, где будет такое свойство)
 */
export function createRequestSaga(actions: RequestActions, requestFunc: AnyFunction, deb?: number) {

    function* requestSequence(action) {
        const { values } = action.payload;

        try {
            const response = yield call(requestFunc, values);

            yield put(actions.success(response?.data))
        } catch (error) {

            yield delay(1000);

            if (error.response) {
                yield put(actions.error(error?.response?.data));
            } else {
                yield put(actions.error(error));
            }
        }
    }

    return function* requestSaga() {
        if (deb) {
            yield debounce(deb, actions.types.request, requestSequence);
        } else {
            yield takeLatest(actions.types.request, requestSequence);
        }
    }
}
