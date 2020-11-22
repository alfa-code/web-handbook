import { RouteComponentProps } from 'react-router-dom';
import { fetchHtmlTagInfoAC } from 'Actions/index';

type MapStateToProps = {
    isHtmlTagsInfoLoading: boolean;
    tagInfo: any;
    htmlTag: string;
}

type MapDispatchToProps = {
};

type OwnProps = {
    fetchHtmlTagInfoDA: typeof fetchHtmlTagInfoAC;
}

export type Props = OwnProps & MapStateToProps & MapDispatchToProps & RouteComponentProps<{ htmlTag: string }>;
