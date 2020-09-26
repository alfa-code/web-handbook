import { ModeAuthPage } from 'Pages/auth-page/props';
import { selectAppLoadingStatus } from 'Selectors/ui/select-app-loading-status';

type MapStateToProps = {
    isLoading: ReturnType<typeof selectAppLoadingStatus>
}

type MapDispatchToProps = {
    registrationStartDA: any;
    authStartDA: any;
};

type OwnProps = {
    mode: ModeAuthPage;
}

export type Props = OwnProps & MapStateToProps & MapDispatchToProps;
