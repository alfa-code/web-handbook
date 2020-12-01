import { toggleMobileMenuStateAC } from 'Actions/index';

type MapStateToProps = {
    isMobileMenuOpened: boolean
}

type MapDispatchToProps = {
    toggleMobileMenuStateAD: typeof toggleMobileMenuStateAC
};

type OwnProps = {

}

export type Props = OwnProps & MapStateToProps & MapDispatchToProps;
