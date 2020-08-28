import React, { Component } from 'react';
import { connect } from 'react-redux';

import { userParamsGet, getUserCoursesActions } from 'Actions/request-actions';
import { CabinetPage } from 'Pages/cabinet-page';
import { selectUserParams } from 'Selectors/user-params';
import { selectUserCourses } from 'Selectors/courses/courses.selector';

import { Props } from './props';

class Container extends Component<Props> {
    componentDidMount() {
        const { userParamsGetDA, getUserCoursesActionsDA } = this.props;
        userParamsGetDA();
        getUserCoursesActionsDA();
    }
    render() {
        const { userParams, userCourses } = this.props;
        return (
            <CabinetPage
                userParams={ userParams }
                userCourses={ userCourses }
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userParams: selectUserParams(state),
        userCourses: selectUserCourses(state),
    }
}

const mapDispatchToProps = {
    userParamsGetDA: userParamsGet.request,
    getUserCoursesActionsDA: getUserCoursesActions.request
}

export const CabinetPageContainer = connect(mapStateToProps, mapDispatchToProps)(Container)
