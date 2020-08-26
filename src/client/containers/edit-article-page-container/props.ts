import { RouteComponentProps } from 'react-router-dom';

type OwnProps = {
}

type MapStateToProps = {
}

type MapDispatchToProps = {
    editArticleByIdStartDA: any;
};

export type Props = OwnProps & MapStateToProps & MapDispatchToProps & RouteComponentProps<{ post_id }>;
