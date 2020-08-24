import get from 'lodash/get';

export function selectCoursesList(state) {
    return get(state, 'courses.coursesList', []);
}
