import React, { ReactNode } from 'react';

import styles from './header-style.pcss';

interface Props {}
interface State {}

export class Header extends React.Component<Props, State> {
    render(): ReactNode {
        const { children } = this.props;

        return (
            <div className={ styles.header }>
                { children }
            </div>
        );
    }
}
