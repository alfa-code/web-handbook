import { createUIRequestReducer } from 'Utils/redux/create-ui-request-reducer';
import { userParamsChange, userParamsGet } from 'Actions/request-actions';

export const uiUserParamsChange = createUIRequestReducer(userParamsChange);
export const uiUserParamsGet = createUIRequestReducer(userParamsGet);
