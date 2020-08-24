import { TYPES } from 'Actions/ui/background-color';

const initialState = {
    backgroundColor: '#fff',
};

export function changeBackgroundColor(state = initialState, action) {
    switch (action.type) {
        case TYPES.CHANGE_BACKGROUND_COLOR:
            return {
                ...state,
                backgroundColor: action.payload
            }
        default:
            return state
    }
}
