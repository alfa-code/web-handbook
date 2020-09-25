import { coursesListGetActions, courseGetActions } from 'Actions/request-actions';

import { Action } from 'Types/actions';

interface IinitialState {
    coursesList?: []
}

const initialState: IinitialState = {
    coursesList: []
}

export function coursesReducer(state = initialState, action: Action) {
    const { type, payload } = action;

    switch (type) {
        case coursesListGetActions.types.success:
            return {
                ...state,
                coursesList: [
                    ...payload
                ]
            };
        case courseGetActions.types.success: {
            return {
                ...state,
                currentCourse: {
                    ...payload
                }
            };
        }
        default:
            return state
    }
}