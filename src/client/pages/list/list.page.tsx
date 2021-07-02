import React, { PureComponent } from 'react';

import loadable from '@loadable/component';

import { Loading } from 'Components/loading';

import { Props } from './props';

const AttributesListPage = loadable(() => import('Pages/attribute/attribute.page'), {
    fallback: <Loading />,
});

const ElementsListPage = loadable(() => import('Pages/elements-list/elements-list.page'), {
    fallback: <Loading />,
});

export class ListPage extends PureComponent<Props> {
    render() {
        const {
            type,
            ...routeProps
        } = this.props;


        switch (type) {
            case 'attributes': {
                return (
                    <AttributesListPage />
                )
            }
            case 'elements': {
                return (
                    <ElementsListPage {...routeProps}/>
                )
            }
            default: {
                return null;
            }
        }
    }
}
