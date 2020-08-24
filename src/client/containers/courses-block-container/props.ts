type MapStateToProps = {
    coursesList: any[];
    loading: boolean;
}

type MapDispatchToProps = {
    getCoursesListStartDA: any;
};

type OwnProps = {

}

export type Props = OwnProps & MapStateToProps & MapDispatchToProps;
