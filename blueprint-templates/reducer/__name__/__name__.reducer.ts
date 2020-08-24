import { TYPES } from 'Actions/some-types';
import { Action } from 'Types/actions';

interface IinitialState {
}

const initialState: IinitialState = {
}

export function {{camelCase name}}Reducer(state = initialState, action: Action) {
    const { type, payload } = action;

    switch (type) {
        case TYPES.SOME_TYPE:
            return {
                ...state,
                ...payload
            };
        default:
            return state
    }
}
