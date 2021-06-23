import { toggleMobileMenuAC } from 'Actions/index';

type MapStateToProps = {
    tags: string[]
}

type MapDispatchToProps = {
    toggleMobileMenuStateAD: typeof toggleMobileMenuAC
};

type OwnProps = {

}

export type Props = OwnProps & MapStateToProps & MapDispatchToProps;
