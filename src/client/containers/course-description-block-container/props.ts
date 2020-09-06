type MapStateToProps = {
    auth: {
        isAuthenticated: boolean;
    },
    isCourseStarted: boolean;
}

type MapDispatchToProps = {
    createUserCourseDA: any;
};

type OwnProps = {
    currentCourse: any;
    currentCourseId: string;
}

export type Props = OwnProps & MapStateToProps & MapDispatchToProps;
