import { RouteComponentProps } from 'react-router-dom';

type MapStateToProps = {
    currentCourse: any;
}

type MapDispatchToProps = {
    courseGetByIdDA: any;
    saveEditedCourseDA: any;
};

type OwnProps = {

}

export type Props = OwnProps & MapStateToProps & MapDispatchToProps & RouteComponentProps<{ courseId }>;
