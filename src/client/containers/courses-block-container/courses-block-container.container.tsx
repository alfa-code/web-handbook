import React, { Component } from 'react';
import { connect } from 'react-redux';

import { coursesListGetActions } from 'Actions/request-actions';

import { CoursesBlock } from 'Blocks/courses-block/courses-block';
import { selectCoursesList } from 'Selectors/courses/courses.selector';
import { selectCoursesListLoading } from 'Selectors/ui/courses.selector';

import { Props } from './props';

class Container extends Component<Props> {
    render() {
        const {
            getCoursesListStartDA,
            coursesList,
            loading,
        } = this.props;

        return (
            <CoursesBlock
                getCoursesListStartDA={ getCoursesListStartDA }
                coursesList={ coursesList }
                loading={ loading }
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        coursesList: selectCoursesList(state),
        loading: selectCoursesListLoading(state),
    }
}

const mapDispatchToProps = {
    getCoursesListStartDA: coursesListGetActions.request
}

export const CoursesBlockContainer = connect(mapStateToProps, mapDispatchToProps)(Container)
