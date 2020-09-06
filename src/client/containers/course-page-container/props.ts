import { RouteComponentProps } from 'react-router-dom';

type MapStateToProps = {
    currentCourse: any;
}

type MapDispatchToProps = {
    courseGetByIdDA: any;
};

type OwnProps = {

}

export type Props = RouteComponentProps<{ id: string }> & OwnProps & MapStateToProps & MapDispatchToProps;
