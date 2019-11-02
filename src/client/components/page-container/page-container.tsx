import React, { ReactNode } from 'react';
import classNames from 'classnames';

import globalStyles from 'Src/client/global.pcss';

import styles from './page-container.pcss';

type Props = {
    children: ReactNode;
}

export function PageContainer(props: Props) {
    const { children } = props;

    return (
        <div className={ classNames(styles.pageContainer, globalStyles.verticalNeighbors) }>
            { children }
        </div>
    );
}
