import React, { Component } from 'react';
import { connect } from 'react-redux';

import { coursesListGetActions, deleteCourseByIdActions } from 'Actions/request-actions';
import { CoursesListPage } from 'Pages/admin/courses/courses-list';
import { selectCoursesList } from 'Selectors/courses/courses.selector';

import { Props } from './props';

class Container extends Component<Props> {
    render() {
        const { getCoursesListStartDA, coursesList, deleteCourseByIdDA } = this.props;
        return (
            <CoursesListPage
                coursesList={ coursesList }
                getCoursesListStartDA={ getCoursesListStartDA }
                deleteCourseByIdDA={ deleteCourseByIdDA }
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        coursesList: selectCoursesList(state),
    }
}

const mapDispatchToProps = {
    getCoursesListStartDA: coursesListGetActions.request,
    deleteCourseByIdDA: deleteCourseByIdActions.request
}

export const CoursesListContainer = connect(mapStateToProps, mapDispatchToProps)(Container)
