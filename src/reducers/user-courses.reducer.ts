import { AnyAction } from 'redux';
import { getUserCoursesActions } from 'Actions/request-actions';

export function userCoursesReducer(state = [], action: AnyAction) {
    switch (action.type) {
        case getUserCoursesActions.types.success:
            return action.payload
        default:
            return state;
    }
}
