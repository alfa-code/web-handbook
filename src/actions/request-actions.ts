import { createRequestActions } from 'Utils/redux/create-request-actions';

export const userParamsChange = createRequestActions('USER_PARAMS_CHANGE');
export const userParamsGet = createRequestActions('USER_PARAMS_GET');
export const changePassword = createRequestActions('CHANGE_PASSWORD');
