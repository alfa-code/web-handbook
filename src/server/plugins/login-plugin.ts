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
    
                //let foundUser;
                if (login && password) {
                    // eslint-disable-next-line
                    const sql = `SELECT user_id, username, rights FROM accounts WHERE username = '${login}' AND password = '${password}'`;
                    // const result: any = await createSQLRequest(pgClient, sql);
                    const result = await request.pg.client.query(sql);
    
                    if (result.rowCount === 1) {
                        const { user_id: userId, username, rights } = result.rows[0]
    
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
                            message: 'Вы успешно аутентифицированы!',
                            redirectTo: '/profile'
                        })
                    } else {
                        return h.response({
                            type: 'error',
                            message: 'Ошибка ввода данных или такого пользователя не существует!'
                        });
                    }
                }
            }
        });
    }
};
