import React, { Component } from 'react';
import { connect } from 'react-redux';

import { CreateCourseAdminPage } from 'Pages/admin/courses/create-course-admin-page';
import { createNewCourseActions } from 'Actions/request-actions';

import { Props } from './props';

class Container extends Component<Props> {
    render() {
        const { createNewCourseDA } = this.props;

        return (
            <CreateCourseAdminPage createNewCourseDA={ createNewCourseDA }/>
        );
    }
}

const mapStateToProps = () => {
    return {

    }
}

const mapDispatchToProps = {
    createNewCourseDA: createNewCourseActions.request
}

export const CreateCourseAdminPageContainer = connect(mapStateToProps, mapDispatchToProps)(Container)
