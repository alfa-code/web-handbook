import React, { PureComponent, ReactNode } from 'react';

import * as logoImage from 'Assets/icons/logo/logo.svg';

interface Props {}
interface State {}

import styles from './logo-style.pcss';

export class Logo extends PureComponent<Props, State> {
    render(): ReactNode {
        return (
            <img
                src={ logoImage }
                alt='Логотип "Альфа Код"'
                className={ styles.logo }
            />
        )
    }
}

