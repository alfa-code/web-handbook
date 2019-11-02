import React, { ReactNode } from 'react';

import styles from './page-header-style.pcss';

interface Props {}
interface State {}

export class PageHeader extends React.Component<Props, State> {
    render(): ReactNode {
        const { children } = this.props;

        return (
            <header className={ styles.header }>
                { children }
            </header>
        );
    }
}
