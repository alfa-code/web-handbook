import { selectBreadCrumbs } from 'Selectors/index';

type OwnProps = {
	breadcrumbs: ReturnType<typeof selectBreadCrumbs>;
}

export type Props = OwnProps;
