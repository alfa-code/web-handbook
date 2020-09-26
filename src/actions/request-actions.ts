import { createRequestActions } from 'Utils/redux/create-request-actions';

export const userParamsChange = createRequestActions('USER_PARAMS_CHANGE');
export const userParamsGet = createRequestActions('USER_PARAMS_GET');
export const changePassword = createRequestActions('CHANGE_PASSWORD');
export const coursesListGetActions = createRequestActions('GET_COURSES_LIST');
export const courseGetActions = createRequestActions('GET_COURSE_BY_ID');
export const createNewCourseActions = createRequestActions('CREATE_NEW_COURSE');
export const saveEditedCourseActions = createRequestActions('SAVE_EDITES_COURSE');
export const deleteCourseByIdActions = createRequestActions('DELETE_COURSE_BY_ID');
export const getUserCoursesActions = createRequestActions('GET_USER_COURSES');
export const createUserCourseActions = createRequestActions('CREATE_USER_COURSE');

export const registrationActions = createRequestActions('REGISTRATION');
export const authActions = createRequestActions('AUTHENTICATION');
