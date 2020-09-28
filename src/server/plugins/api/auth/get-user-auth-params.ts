import Joi from 'joi';

const responseModel = Joi.object({
    id:
        Joi.number()
        .required()
        .description('Уникальный идентификатор в таблице users'),
    user_id:
        Joi.number()
        .required()
        .description('Ссылка на идентификатор в таблице accounts'),
    avatar:
        Joi.string()
        .required()
        .description('Ссылка на аватарку пользователя'),
    description:
        Joi.string()
        .required()
        .description('Краткая информацио о пользователе'),
    name:
        Joi.string()
        .required()
        .description('Имя пользователя'),
    surname:
        Joi.string()
        .required()
        .description('Фамилия пользователя')
}).label('result');

import { SERVER_ENDPOINTS } from 'Constants/endpoints';

export const getUserAuthParams = {
    name: 'getUserAuthParams',
    version: '1.0.0',
    register: async function (server, options) {
        server.route({
            method: 'GET',
            path: SERVER_ENDPOINTS.authParams,
            options: {
                ...options,
                tags: ['api'],
                response: { schema: responseModel },
                // auth: true
            },
            handler: async (request, h) => {
                const { auth } = request;

                let responseData;
                if (auth.isAuthenticated) {
                    responseData = {
                        isAuthenticated: auth.isAuthenticated,
                        ...auth.credentials
                    }
                } else {
                    responseData = {
                        isAuthenticated: false
                    }
                }

                const res = h.response(responseData);
                res.code(200);
                return res;
            },
        });
    }
}

