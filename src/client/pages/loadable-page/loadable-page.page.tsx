import React, { PureComponent } from 'react';

import loadable from '@loadable/component';

import { Loading } from 'Components/loading';

import { Props } from './props';

// const AttributesListPage = loadable(() => import('Pages/attribute/attribute.page'), {
//     fallback: <Loading />,
// });

const ElementsListPage = loadable(() => import('Pages/elements-list/elements-list.page'));

// const ElementsListPage = loadable(() => import('Pages/elements-list/elements-list.page'), {
//     fallback: <Loading />,
// });

// const AttributeInfoPage = loadable(() => import('Pages/attribute-info'), {
//     fallback: <Loading />,
// });

// const HtmlElementPage = loadable(() => import('Pages/html-element'), {
//     fallback: <Loading />,
// });

// const HtmlElementPage = loadable(() => import('Pages/html-element'));


export class LoadablePage extends PureComponent<Props> {
    render() {
        const {
            type,
            ...routeProps
        } = this.props;

        return <ElementsListPage {...routeProps} />

        // switch (type) {
        //     case 'attributes-list': {
        //         return (
        //             <AttributesListPage />
        //         )
        //     }
        //     case 'elements-list': {
        //         return (
        //             <ElementsListPage {...routeProps} />
        //         )
        //     }
        //     case 'element-info': {
        //         return (
        //             <HtmlElementPage {...routeProps} />
        //         )
        //     }
        //     case 'attribute-info': {
        //         return (
        //             <AttributeInfoPage {...routeProps} />
        //         )
        //     }
        //     default: {
        //         return null;
        //     }
        // }
    }
}
