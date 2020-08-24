import { selectUI } from './index';

export function selectCoursesListLoading(state) {
    return selectUI(state)?.courses?.loading;
}

// import get from 'lodash/get';

// export function selectCoursesList(state) {
//     return get(state, 'courses.coursesList', []);
// }
