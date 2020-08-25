import { dbError } from 'Src/server/utils/errors/handlers/db-error';
import { userNotFound } from 'Src/server/utils/errors/handlers/user-not-found';
import { AccountService } from 'Src/server/plugins/services/AccountService';
import { UserService } from 'Src/server/plugins/services/UserService';
import { NotFoundError } from 'Src/server/utils/errors/types';

const defaultErrorHandlers = {
    db: dbError(),
    notFound: userNotFound()
};

const defaultSuccessHandlers = {
    success: (request, h) => {
        const res = h.response({
            type: 'success',
            code: 'SUCCESS_CHANGE_CREDENTIALS',
            message: 'Информация обновлена!'
        });

        res.code(200);

        return res;
    },
    data: (request, h, data) => {
        const res = h.response(data);

        res.code(200);

        return res;
    }
};

export const changeUserParamsPlugin = {
    name: 'changeUserParamsPlugin',
    version: '1.0.0',
    register: async function (server, options) {
        server.route({
            method: 'PATCH',
            path: '/api/user/change-params',
            options,
            handler: async (request, h) => {
                const {
                    errorHandlers = defaultErrorHandlers,
                    successHandlers = defaultSuccessHandlers
                } = options;

                const {
                    payload: userData,
                    auth: {
                        credentials: { username }
                    }
                } = request;

                const { Account, User } = await server.methods.getModels();

                try {
                    const account = await AccountService(username, Account);
                    const userInfo = await UserService(account, User);
                    await userInfo.update({ name: userData.name, surname: userData.surname })

                    return successHandlers.success(request, h);
                } catch (e) {
                    if (e instanceof NotFoundError) {
                        errorHandlers.notFound(request, h);
                    } else {
                        console.error(e);
                    }
                }
            }
        })
    }
}

export const getUserParamsPlugin = {
    name: 'getUserParamsPlugin',
    version: '1.0.0',
    register: async function (server, options) {
        server.route({
            method: 'GET',
            path: '/api/user/get',
            options,
            handler: async (request, h) => {
                const {
                    errorHandlers = defaultErrorHandlers,
                    successHandlers = defaultSuccessHandlers
                } = options;

                const {
                    auth: {
                        credentials: { username }
                    }
                } = request;

                const { Account, User } = await server.methods.getModels();

                try {
                    const account = await AccountService(username, Account);
                    // @ts-ignore
                    const userInfo = await UserService(account, User);

                    return successHandlers.data(request, h, userInfo.toJSON());
                } catch (e) {
                    if (e instanceof NotFoundError) {
                        errorHandlers.notFound(request, h);
                    } else {
                        console.error(e);
                    }
                }
            }
        })
    }
}
