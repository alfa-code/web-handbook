import React, { ReactNode } from 'react';

import styles from './page-container.pcss';

type Props = {
    children: ReactNode
}

export function PageContainer(props: Props) {
    const { children } = props;

    return (
        <div className={ styles.pageContainer }>
            { children }
        </div>
    );
}
