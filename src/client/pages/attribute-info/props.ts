import { fetchHtmlAttributeInfoAsync } from 'Actions/index';
import { RouteComponentProps } from 'react-router-dom';

import {
    selectIsHtmlAttributeInfoLoading,
    selectHtmlAttributeInfo,
} from 'Selectors/index';

type OwnProps = any

type MapStateToProps = {
    isHtmlAttributeInfoLoading: ReturnType<typeof selectIsHtmlAttributeInfoLoading>;
    htmlAttributeInfo: ReturnType<typeof selectHtmlAttributeInfo>;
}


type MapDispatchToProps = {
    fetchHtmlAttributeInfoDA: typeof fetchHtmlAttributeInfoAsync.request;
};

export type Props = OwnProps & MapStateToProps & MapDispatchToProps & RouteComponentProps<{ htmlAttribute: string }>;
