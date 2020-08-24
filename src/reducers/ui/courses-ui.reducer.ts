import { createUIRequestReducer } from 'Utils/redux/create-ui-request-reducer';
import { coursesListGetActions } from 'Actions/request-actions';

export const uiCoursesListGet = createUIRequestReducer(coursesListGetActions);
