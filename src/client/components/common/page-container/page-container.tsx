import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode
}

import styles from './page-container.pcss';

export function PageContainer(props: Props) {
    return (
        <div className={ styles.pageContainer }>
            { props.children }
        </div>
    )
}
