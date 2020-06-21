import axios, { Method } from 'axios';

/**
 * Функция-обертка над axios
 * @param url
 * @param method
 */
export function createApiRequest(url, method = 'patch' as Method) {
    return async function (data) {
        return axios(url, {
            method,
            data
        });
    }
}
