import { dbError } from 'Src/server/utils/errors/handlers/db-error';
import { CHANGE_PASSWORD_ERRORS } from 'Src/constants/error-codes';

const defaultErrorHandlers = {
    db: dbError,
    wrongPassword: (request, h) => {
        const res = h.response({
            type: 'error',
            ...CHANGE_PASSWORD_ERRORS.WRONG_OLD_PASSWORD
        })

        res.code(400);
        return res;
    },
    samePassword: (request, h) => {
        const res = h.response({
            type: 'error',
            ...CHANGE_PASSWORD_ERRORS.SAME_PASSWORD
        })

        res.code(400);
        return res;
    },
    notFound: (request, h) => {
        const res = h.response({
            type: 'error',
            ...CHANGE_PASSWORD_ERRORS.NO_SUCH_USER
        })

        res.code(404);
        return res;
    }
}

const defaultSuccessHandler = (request, h) => {
    const res = h.response({
        type: 'success',
        code: 'SUCCESS_CHANGE_PASSWORD',
        message: 'Вы успешно изменили пароль!'
    });

    res.code(200);
    return res;
}

export const changePasswordPlugin = {
    name: 'changePasswordPlugin',
    version: '1.0.0',
    register: async function (server, options) {
        server.route({
            method: 'PATCH',
            path: '/api/change-password',
            options,
            handler: async (request, h) => {
                const {
                    errorHandlers = defaultErrorHandlers,
                    successHandler = defaultSuccessHandler
                } = options;
                const {
                    payload: userData,
                    auth: {
                        credentials: { username }
                    }
                } = request;
                const { User } = await server.methods.getModels();
                let result;

                try {
                    result = await User.findOne({ where: { username } });
                } catch (error) {
                    return errorHandlers.db(request, h, error)
                }

                if (result) {
                    const { dataValues: { password } } = result;

                    if (password !== userData.oldPassword) {
                        return errorHandlers.wrongPassword(request, h)
                    }

                    if(password === userData.newPassword) {
                        return errorHandlers.samePassword(request, h)
                    }

                    try {
                        await User.update({ password: userData.newPassword }, { where: { username } });
                    } catch (error) {
                        return errorHandlers.db(request, h, error)
                    }

                    return successHandler(request, h);
                } else {
                    return errorHandlers.notFound(request, h);
                }
            }
        });
    }
}

