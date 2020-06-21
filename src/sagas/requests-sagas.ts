import { userParamsChange, userParamsGet } from 'Actions/request-actions';
import { createRequestSaga } from 'Src/utils/redux/create-request-saga';
import { createApiRequest } from 'Src/utils/requests/createApiRequest';

const userParamsChangeRequest = createApiRequest('/api/user/change-params', 'PATCH');
export const userParamsChangeSaga = createRequestSaga(userParamsChange, userParamsChangeRequest, 800);

const userParamsGetRequest = createApiRequest('/api/user/get', 'GET');
export const userParamsGetSaga = createRequestSaga(userParamsGet, userParamsGetRequest);
