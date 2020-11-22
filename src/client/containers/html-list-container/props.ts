import { RouteComponentProps } from 'react-router-dom';

type MapStateToProps = {
    htmlTags: any;
}

type MapDispatchToProps = {
};

type OwnProps = {

}

export type Props = RouteComponentProps & OwnProps & MapStateToProps & MapDispatchToProps;
