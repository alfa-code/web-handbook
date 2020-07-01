import jwt from 'jsonwebtoken';
import { jwtAlgorithm } from 'Src/constants/jwt';
import { JWT_SECRET_KEY } from 'Src/constants/env-variables';
const jwtPrivateKey = process.env[JWT_SECRET_KEY]

export const registrationPlugin = {
    name: 'registrationPlugin',
    version: '1.0.0',
    register: async function (server) {
        server.route({
            method: 'POST',
            path: '/api/auth/registration',
            options: {
                auth: false,
            },
            handler: async (request, h) => {
                const { login, password } = request.payload;
    
                const { Account } = await server.methods.getModels();
    
                if (login && password) {
                    const result = await Account.findAll({
                        where: {
                            username: login
                        }
                    });
    
                    if (result.length === 0) {
                        const createdUser = await Account.create({ username: login, password, rights: 'user' });
    
                        if (createdUser && createdUser.dataValues) {
                            const { user_id: userId, username, rights } = createdUser.dataValues;
    
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
    
                                return h.response({
                                    type: 'success',
                                    message: 'Вы успешно зарегистрированы!',
                                    redirectTo: '/profile'
                                })
                        }
                    } else {
                        return h.response({
                            type: 'error',
                            message: 'Пользователь с таким логином уже существует!'
                        });
                    }
                }
            }
        });
    }
};
