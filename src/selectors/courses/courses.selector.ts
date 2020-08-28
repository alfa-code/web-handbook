import get from 'lodash/get';

export function selectCoursesList(state) {
    return get(state, 'courses.coursesList', []);
}

export function selectCurrentCourse(state) {
    return get(state, 'courses.currentCourse', {});
}

export function selectUserCourses(state) {
    return get(state, 'user.courses', []);
}
