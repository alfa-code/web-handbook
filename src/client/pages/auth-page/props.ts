type MapStateToProps = {
}

type MapDispatchToProps = {
};

export type ModeAuthPage = 'registration' | 'login';

type OwnProps = {
    mode: ModeAuthPage;
    isLoading: boolean;
    registrationStartDA: any;
    authStartDA: any;
}

export type Props = OwnProps & MapStateToProps & MapDispatchToProps;
