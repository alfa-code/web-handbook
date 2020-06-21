import { createApiRequest } from 'Utils/requests/createApiRequest';
import { createRequestSaga } from 'Utils/redux/create-request-saga';
import { changePassword } from 'Actions/request-actions';


const changePasswordRequest = createApiRequest('/api/change-password', 'PATCH');
export const changePasswordSaga = createRequestSaga(changePassword, changePasswordRequest, 800)
