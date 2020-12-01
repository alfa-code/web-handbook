import { toggleMobileMenuStateAC } from 'Actions/index';

type MapStateToProps = {
    tags: string[]
}

type MapDispatchToProps = {
    toggleMobileMenuStateAD: typeof toggleMobileMenuStateAC
};

type OwnProps = {

}

export type Props = OwnProps & MapStateToProps & MapDispatchToProps;
