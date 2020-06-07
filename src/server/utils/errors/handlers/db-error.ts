export function dbError(request, h, params) {
    const res = h.response({
        type: 'error',
        code: 'ERROR_WHILE_DB_REQUEST',
        message: params.error.message
    })

    res.code(500);
    return res;
}
