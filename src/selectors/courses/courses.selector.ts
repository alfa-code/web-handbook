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

export function selectIsCourseStarted(state, courseId) {
    const userCourses = get(state, 'user.courses', []);
    const isCourseStarted = userCourses.some(function(course) {
        return course.course_id === Number(courseId);
    });
    return isCourseStarted;
}

