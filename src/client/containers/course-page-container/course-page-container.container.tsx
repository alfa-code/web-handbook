import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { courseGetActions } from 'Actions/request-actions';

import { CoursePage } from 'Pages/course-page';

import { selectCurrentCourse } from 'Selectors/courses/courses.selector';

import { Props } from './props';

class Container extends PureComponent<Props> {
    componentDidMount() {
        const {
            match: {
                params: {
                    id
                }
            }
        }= this.props;

        const { courseGetByIdDA } = this.props;
        courseGetByIdDA(id);
    }

    render() {
        const {
            match: {
                params: {
                    id
                }
            },
            currentCourse
        }= this.props;

        return (
            <CoursePage
                currentCourseId={ id }
                currentCourse={ currentCourse }
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currentCourse: selectCurrentCourse(state)
    }
}

const mapDispatchToProps = {
    courseGetByIdDA: courseGetActions.request
}

export const CoursePageContainer = connect(mapStateToProps, mapDispatchToProps)(Container)
