import React, { ReactNode } from 'react';

interface Props {}
interface State {}

import styles from './header-style.pcss';

export class Header extends React.Component<Props, State> {
    render(): ReactNode {
        return (
            <div className={ styles.header } >
                { this.props.children }
            </div>
        );
    }
}
