import { RouteComponentProps } from 'react-router-dom';
import { fetchHtmlTagInfoAsync } from 'Actions/index';

type MapStateToProps = {
    isHtmlTagsInfoLoading: boolean;
    tagInfo: any;
    htmlTag: string;
}

type MapDispatchToProps = {
};

type OwnProps = {
    fetchHtmlTagInfoDA: typeof fetchHtmlTagInfoAsync.request;
}

export type Props = OwnProps & MapStateToProps & MapDispatchToProps & RouteComponentProps<{ htmlTag: string }>;
