export const TYPES = {
    SUCCESS: 'NOTIFY_SUCCESS',
    ERROR: 'NOTIFY_ERROR',
}

export function notifySuccessAC(message) {
    return {
        type: TYPES.SUCCESS,
        payload: {
            message
        }
    }
}

export function notifyErrorAC(message) {
    return {
        type: TYPES.ERROR,
        payload: {
            message
        }
    }
}
