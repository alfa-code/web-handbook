import { fetchHtmlAttributeInfoAsync } from 'Actions/index';
import { RouteComponentProps } from 'react-router-dom';

type OwnProps = {

}

type MapStateToProps = {

}


type MapDispatchToProps = {
    fetchHtmlAttributeInfoDA: typeof fetchHtmlAttributeInfoAsync.request;
};

export type Props = OwnProps & MapStateToProps & MapDispatchToProps & RouteComponentProps<{ htmlAttribute: string }>;
