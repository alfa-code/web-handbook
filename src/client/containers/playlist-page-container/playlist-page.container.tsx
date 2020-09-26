import React, { Component } from 'react';
import { connect } from 'react-redux';

import { PlayListPage } from 'Pages/playlist-page';
import { PlaylistUnstartedPage } from 'Pages/playlist-unstarted-page';

import { selectUserCourseById } from 'Selectors/courses/courses.selector';

import { Props } from './props';

class Container extends Component<Props> {
    render() {
        const { userCourse } = this.props;
        const { match: { params: { id } } } = this.props;
        console.log('userCourse', userCourse)
        if (userCourse) {
            return (
                <PlayListPage />
            );
        }
        return <PlaylistUnstartedPage courseId={id}/>
    }
}

const mapStateToProps = (state, props) => {
    const { match: { params: { id } } } = props;
    return {
        userCourse: selectUserCourseById(state, id)
    }
}

const mapDispatchToProps = {
}

export const PlaylistPageContainer = connect(mapStateToProps, mapDispatchToProps)(Container)
