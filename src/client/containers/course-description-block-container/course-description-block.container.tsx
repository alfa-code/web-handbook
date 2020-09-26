import React, { Component } from 'react';
import { connect } from 'react-redux';

import { CourseDescriptionBlock } from 'Blocks/course/course-description-block';

import { createUserCourseActions } from 'Actions/request-actions';

import { selectAuthInfo } from  'Selectors/select-auth-info';
import { selectIsCourseStarted } from 'Selectors/courses/courses.selector';
import { selectAppLoadingStatus } from 'Selectors/ui/select-app-loading-status';

import { Props } from './props';

class Container extends Component<Props> {
    render() {
        const {
            auth: { isAuthenticated },
            isCourseStarted,
            currentCourseId,
            createUserCourseDA,
            isLoading
        } = this.props;

        return (
            <CourseDescriptionBlock
                currentCourseId={ currentCourseId }
                currentCourse={ this.props.currentCourse }
                isAuthenticated={ isAuthenticated }
                isCourseStarted={ isCourseStarted }
                createUserCourseDA={ createUserCourseDA }
                isLoading={ isLoading }
            />
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        auth: selectAuthInfo(state),
        isCourseStarted: selectIsCourseStarted(state, props.currentCourseId),
        isLoading: selectAppLoadingStatus(state)
    }
}

const mapDispatchToProps = {
    createUserCourseDA: createUserCourseActions.request,
}

export const CourseDescriptionBlockContainer = connect(mapStateToProps, mapDispatchToProps)(Container)
