type MapStateToProps = {
    userParams: any;
    userCourses: any;
}

type MapDispatchToProps = {
    userParamsGetDA: any;
    getUserCoursesActionsDA: any;
};

type OwnProps = {

}

export type Props = OwnProps & MapStateToProps & MapDispatchToProps;
