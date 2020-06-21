import { ActionCreator } from 'redux';
import { Shape } from 'Types/objects';

export type RequestActions = {
    request: ActionCreator<{ type: string; payload: { values: Shape<any> } }>;
    success: ActionCreator<{ type: string; payload: { message: string } }>;
    error: ActionCreator<{ type: string; payload: { error: Shape<any> | string } }>;
    retry: ActionCreator<{ type: string; payload: { values: Shape<any> } }>;
    types: Shape<string>;
    name: string;
}

/**
 * Создание объекта с типовыми action creators, характерных для асинхронных действий
 * @param NAME - имя-префикс для экшенов
 */
export function createRequestActions(NAME: string): RequestActions {
    return {
        request: (values) => ({
            type: `${NAME}.REQUEST`,
            payload: {
                values
            }
        }),
        success: (data) => ({
            type: `${NAME}.SUCCESS`,
            payload: {
                ...data
            }
        }),
        error: (error) => ({
            type: `${NAME}.ERROR`,
            payload: {
                ...error
            }
        }),
        retry: (values) => ({
            type: `${NAME}.RETRY`,
            payload: {
                values
            }
        }),
        types: {
            request: `${NAME}.REQUEST`,
            success: `${NAME}.SUCCESS`,
            error: `${NAME}.ERROR`,
            retry: `${NAME}.RETRY`,
        },
        name: NAME,
    }
}
