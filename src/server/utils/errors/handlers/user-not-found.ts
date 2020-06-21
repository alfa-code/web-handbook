import { USER_ERRORS } from 'Src/constants/error-codes';

export function userNotFound(error = USER_ERRORS.NO_SUCH_USER) {
    return function(request, h) {
        const res = h.response({
            type: 'error',
            ...error,
        })

        res.code(404);
        return res;
}
}
