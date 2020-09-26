import jwt from 'jsonwebtoken';
import { JWT_SECRET_KEY } from 'Src/constants/env-variables';
import { jwtAlgorithm } from 'Src/constants/jwt';
const jwtPrivateKey = process.env[JWT_SECRET_KEY]

export const loginPlugin = {
    name: 'loginPlugin',
    version: '1.0.0',
    register: async function (server) {
        server.route({
            method: 'POST',
            path: '/api/auth/login',
            options: {
                auth: false,
            },
            handler: async (request, h) => {
                const { login, password } = request.payload;
                const { Account } = await server.methods.getModels();

                if (login && password) {
                    const userSearchResult = await Account.findOne({ where: { username: login, password } });

                    if (userSearchResult && userSearchResult.dataValues) {

                        const { user_id, username, rights } = userSearchResult.dataValues;
                        const token = jwt.sign({ userId: user_id, username, rights }, jwtPrivateKey, { algorithm: jwtAlgorithm });

                        h.state('token', token, {
                            SameSite: 'Lax',
                            isSecure: false,
                            isHttpOnly: false,
                            ttl: 1000 * 60 * 60,
                            path: '/',
                        });

                        const res = h.response({
                            type: 'success',
                            message: 'Вы успешно аутентифицированы!',
                        });
                        res.code(200);
                        return res;
                    } else {
                        const res = h.response({
                            type: 'error',
                            message: 'Ошибка ввода данных или такого пользователя не существует!'
                        });
                        res.code(409);
                        return res;
                    }
                }
            }
        });
    }
};
