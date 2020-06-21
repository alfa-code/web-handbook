import { RequestActions } from './create-request-actions';

/**
 * Создание редюсера, который отслеживает асинхронные экшены
 * @param actions - объект с коллекцией типовых action creator-ов
 * @param initial - изначальное значение редюсера
 */
export function createUIRequestReducer(actions: RequestActions, initial = false) {
    const { types } = actions;

    return function (state = initial, action) {
        switch (action.type) {
            case types.request:
                return true
            case types.success:
            case types.error:
                return false
            default:
                return state
        }
    }
}
