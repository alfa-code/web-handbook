import React, { PureComponent } from 'react';

import loadable from '@loadable/component';

import { Props } from './props';

const AttributesListPage = loadable(() => import('Pages/attribute/attribute.page'), {
    fallback: <div>Загрузка...</div>,
})

// import styles from './list.module.scss';

export class ListPage extends PureComponent<Props> {
    render() {
        const { type } = this.props;

        switch (type) {
            case 'attributes': {
                return (
                    <AttributesListPage />
                )
            }
            case 'elements': {
                return (
                    <div>elements</div>
                )
            }
            default: {
                return null;
            }
        }
    }
}
