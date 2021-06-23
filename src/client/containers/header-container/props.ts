import { toggleMobileMenuAC } from 'Actions/index';

type MapStateToProps = {
    isMobileMenuOpened: boolean
}

type MapDispatchToProps = {
    toggleMobileMenuStateAD: typeof toggleMobileMenuAC
};

type OwnProps = {

}

export type Props = OwnProps & MapStateToProps & MapDispatchToProps;
