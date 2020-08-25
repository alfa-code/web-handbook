import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { courseGetActions } from 'Actions/request-actions';
import { changeBackgroundColor } from 'Actions/ui/background-color';

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
        return (
            <CoursePage
                currentCourse={ this.props.currentCourse }
                changeBackgroundColorDA={ this.props.changeBackgroundColorDA }
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
    courseGetByIdDA: courseGetActions.request,
    changeBackgroundColorDA: changeBackgroundColor
}

export const CoursePageContainer = connect(mapStateToProps, mapDispatchToProps)(Container)
