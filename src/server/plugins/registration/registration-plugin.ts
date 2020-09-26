import jwt from 'jsonwebtoken';

import { jwtAlgorithm } from 'Constants/jwt';
import { JWT_SECRET_KEY } from 'Constants/env-variables';
import { SERVER_ENDPOINTS } from 'Constants/endpoints';

const jwtPrivateKey = process.env[JWT_SECRET_KEY]


export const registrationPlugin = {
    name: 'registrationPlugin',
    version: '1.0.0',
    register: async function (server) {
        server.route({
            method: 'POST',
            path: SERVER_ENDPOINTS.registration,
            options: {
                auth: false,
            },
            handler: async (request, h) => {
                const { login, password } = request.payload;

                const { Account, User } = await server.methods.getModels();

                const sequelize = await server.methods.getOrm();

                const t = await sequelize.transaction();


                try  {
                    if (login && password) {
                        const result = await Account.findAll({
                            where: {
                                username: login
                            }
                        });

                        if (result.length === 0) {
                            const createdAccount = await Account.create({ username: login, password, rights: 'user' });

                            console.log('createdAccount.user_id', createdAccount.user_id)
                            if (createdAccount.user_id) {
                                const createdUser = await User.create({
                                    user_id: createdAccount.user_id,
                                    name: 'Имя',
                                    surname: 'Отчество',
                                    description: 'Новый пользователь',
                                    avatar: `https://api.adorable.io/avatars/145/${ Math.round(0 - 0.5 + Math.random() * (99999 - 0 + 1)) }`
                                });

                                if (!createdUser) {
                                    throw new Error('Что то пошло не так!');
                                }
                            }

                            if (createdAccount && createdAccount.dataValues) {
                                const { user_id: userId, username, rights } = createdAccount.dataValues;

                                    // generate jwt token by user data
                                    const token = jwt.sign({ userId, username, rights }, jwtPrivateKey, { algorithm: jwtAlgorithm });

                                    // set the jwt token cookie
                                    h.state('token', token, {
                                        SameSite: 'Lax',
                                        isSecure: false,
                                        isHttpOnly: false,
                                        ttl: 1000 * 60 * 60, // one hour
                                        path: '/',
                                    });

                                    const res = h.response({
                                        type: 'success',
                                        message: 'Вы успешно зарегистрированы!',
                                    });
                                    res.code(201);
                                    return res;
                            }
                        } else {
                            const res = h.response({
                                type: 'error',
                                message: 'Пользователь с таким логином уже существует!'
                            });
                            res.code(409);
                            return res;
                        }
                    }
                    await t.commit();
                } catch (e) {
                    await t.rollback();
                    const res =  h.response({
                        type: 'error',
                        message: 'Что то пошло не так! Попробуйте позднее!'
                    });
                    res.code(500);
                    return res;
                }
            }
        });
    }
};
