import React, { Component } from 'react';
import { connect } from 'react-redux';

import { EditCourseAdminPage } from 'Pages/admin/courses/edit-course-admin-page';
import { courseGetActions, saveEditedCourseActions } from 'Actions/request-actions';
import { selectCurrentCourse } from 'Selectors/courses/courses.selector';

import { Props } from './props';

class Container extends Component<Props> {
    componentDidMount() {
        const {
            match: {
                params: {
                    courseId
                }
            }
        } = this.props;
        const { courseGetByIdDA } = this.props;
        courseGetByIdDA(courseId);
    }

    render() {
        const {
            currentCourse,
            saveEditedCourseDA
        } = this.props;

        return (
            <EditCourseAdminPage
                currentCourse={ currentCourse }
                saveEditedCourseDA={ saveEditedCourseDA }
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currentCourse: selectCurrentCourse(state),
    }
}

const mapDispatchToProps = {
    courseGetByIdDA: courseGetActions.request,
    saveEditedCourseDA: saveEditedCourseActions.request
}

export const EditCourseAdminPageContainer = connect(mapStateToProps, mapDispatchToProps)(Container)
