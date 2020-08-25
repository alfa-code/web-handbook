import React, { Component } from 'react';
import { connect } from 'react-redux';

import { CoursesListPage } from 'Pages/admin/courses/courses-list';

import { Props } from './props';

// import styles from './courses-list-container.module.scss';

class Container extends Component<Props> {
    render() {
        return (
            <CoursesListPage />
        );
    }
}

const mapStateToProps = (state) => {
}

const mapDispatchToProps = {
}

export const CoursesListContainer = connect(mapStateToProps, mapDispatchToProps)(Container)
