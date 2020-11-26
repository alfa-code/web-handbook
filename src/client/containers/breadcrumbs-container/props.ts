import { selectBreadCrumbs } from 'Selectors/index';

type MapStateToProps = {
    breadcrumbs: ReturnType<typeof selectBreadCrumbs>;
}

type MapDispatchToProps = {
};

type OwnProps = {

}

export type Props = OwnProps & MapStateToProps & MapDispatchToProps;
