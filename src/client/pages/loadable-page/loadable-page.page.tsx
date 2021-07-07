import React, { PureComponent } from 'react';

// import loadable from '@loadable/component';

// import { Loading } from 'Components/loading';

import { Props } from './props';

// const AttributesListPage = loadable(() => import('Pages/attribute/attribute.page'), {
//     fallback: <Loading />,
// });

// const ElementsListPage = loadable(() => import('Pages/elements-list/elements-list.page'), {
//     fallback: <Loading />,
// });

// const AttributeInfoPage = loadable(() => import('Pages/attribute-info/attribute-info.page'), {
//     fallback: <Loading />,
// });

// const HtmlElementPage = loadable(() => import('Pages/html-element/html-element.page'), {
//     fallback: <Loading />,
// });

import AttributesListPage from 'Pages/attribute/attribute.page';
import ElementsListPage from 'Pages/elements-list/elements-list.page';
import AttributeInfoPage from 'Pages/attribute-info/attribute-info.page';
import HtmlElementPage from 'Pages/html-element/html-element.page';


export class LoadablePage extends PureComponent<Props> {
    render() {
        const {
            type,
            ...routeProps
        } = this.props;

        switch (type) {
            case 'attributes-list': {
                return (
                    <AttributesListPage />
                )
            }
            case 'elements-list': {
                return (
                    <ElementsListPage {...routeProps} />
                )
            }
            case 'element-info': {
                return (
                    <HtmlElementPage {...routeProps} />
                )
            }
            case 'attribute-info': {
                return (
                    <AttributeInfoPage {...routeProps} />
                )
            }
            default: {
                return null;
            }
        }
    }
}
