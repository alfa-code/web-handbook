import React, { PureComponent, ReactNode } from 'react'

interface Props {}
interface State {}

import styles from './logo-style.pcss';

class Logo extends PureComponent<Props, State> {
    render(): ReactNode {
        return (
            <span className={ styles.logo }>
                Logo
            </span>
        )
    }
}

export default Logo;
