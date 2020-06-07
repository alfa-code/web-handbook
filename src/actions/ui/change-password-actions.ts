export const TYPES = {
    PASSWORD_VALIDATION_HINT_SET_VISIBILITY: 'PASSWORD_VALIDATION_HINT_SET_VISIBILITY',
    CHANGE_PASSWORD_REQUEST_START: 'CHANGE_PASSWORD_REQUEST_START',
    CHANGE_PASSWORD_REQUEST_SUCCESS: 'CHANGE_PASSWORD_REQUEST_SUCCESS',
    CHANGE_PASSWORD_REQUEST_ERROR: 'CHANGE_PASSWORD_REQUEST_ERROR',
};

export function passwordValidationHintSetVisibilityAC(visibility: boolean) {
    return {
        type: TYPES.PASSWORD_VALIDATION_HINT_SET_VISIBILITY,
        payload: visibility
    }
}

export function changePasswordRequestStartAC(values) {
    return {
        type: TYPES.CHANGE_PASSWORD_REQUEST_START,
        payload: {
            values
        }
    }
}

export function changePasswordRequestSuccessAC(response) {
    return {
        type: TYPES.CHANGE_PASSWORD_REQUEST_SUCCESS,
        payload: {
            ...response
        }
    }
}

export function changePasswordRequestErrorAC(error) {
    return {
        type: TYPES.CHANGE_PASSWORD_REQUEST_ERROR,
        payload: {
            ...error
        }
    }
}
