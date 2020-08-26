type MapStateToProps = {
    coursesList: any;
}

type MapDispatchToProps = {
    getCoursesListStartDA: any;
    deleteCourseByIdDA: any;
};

type OwnProps = {

}

export type Props = OwnProps & MapStateToProps & MapDispatchToProps;
