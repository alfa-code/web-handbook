import React, { Component } from 'react';
import { connect } from 'react-redux';

import { CreateCourseAdminPage } from 'Pages/admin/courses/create-course-admin-page';

import { Props } from './props';

class Container extends Component<Props> {
    render() {
        return (
            <CreateCourseAdminPage />
        );
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = {
}

export const CreateCourseAdminPageContainer = connect(mapStateToProps, mapDispatchToProps)(Container)
