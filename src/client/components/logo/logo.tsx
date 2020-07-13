import React, { PureComponent, ReactNode } from 'react';

import logoImage from 'Assets/icons/logo/logo.svg';
import logoShort from 'Assets/icons/logo/logo-without-name.svg';
import logoDark from 'Assets/icons/logo/logo-without-name-dark.svg';

import { Link } from 'react-router-dom';

import styles from './logo-style.module.scss';

interface Props {
    type?: 'dark' | 'short' | 'default';
}
interface State { }

const logoImgMap = {
    dark: logoDark,
    short: logoShort,
    default: logoImage,
}

export class Logo extends PureComponent<Props, State> {
    static defaultProps = {
        type: 'default'
    }

    render(): ReactNode {
        const { type } = this.props;

        return (
            <Link to='/' className={styles.logoLink}>
                <img
                    src={logoImgMap[type]}
                    alt='Логотип "Альфа Код"'
                    className={styles.logo}
                />
            </Link>
        );
    }
}
