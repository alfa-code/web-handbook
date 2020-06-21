import { SYSTEM_ERRORS } from 'Src/constants/error-codes';

export function dbError(error = SYSTEM_ERRORS.ERROR_WHILE_DB_REQUEST) {
    return function(request, h, params) {
        const res = h.response({
            type: 'error',
            code: error.code,
            message: params.error.message || error.message
        })

        res.code(500);
        return res;
    }
}
