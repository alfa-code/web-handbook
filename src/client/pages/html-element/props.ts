import { RouteComponentProps } from 'react-router-dom';
import { fetchHtmlTagInfoAsync } from 'Actions/index';


type MapStateToProps = {
    isHtmlTagsInfoLoading: boolean;
    tagInfo: any;
    htmlTag: string;
}

type MapDispatchToProps = {
    fetchHtmlTagInfoDA: typeof fetchHtmlTagInfoAsync.request;
};

type OwnProps = {
    /** Загружаются ли данные для отображения страницы */
    loading: boolean;
    /** Данные о теге */
    tagInfo: any;
    htmlTag: string;
}

export type Props = OwnProps & MapStateToProps & MapDispatchToProps & RouteComponentProps<{ htmlTag: string }>;
