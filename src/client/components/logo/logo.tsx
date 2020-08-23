import React, { PureComponent, ReactNode } from 'react';

import logoImage from 'Assets/icons/logo/logo.svg';
import logoImageWhite from 'Assets/icons/logo/svg/logo-horizontal-white.svg';
import logoImageBlack from 'Assets/icons/logo/svg/logo-horizontal-black.svg';
import logoShort from 'Assets/icons/logo/logo-without-name.svg';
import logoDark from 'Assets/icons/logo/logo-without-name-dark.svg';

import { Link } from 'react-router-dom';

import styles from './logo-style.module.scss';

interface Props {
    type?: 'dark' | 'short' | 'default' | 'white' | 'black';
    className?: string;
}
interface State { }

const logoImgMap = {
    dark: logoDark,
    short: logoShort,
    default: logoImage,
    white: logoImageWhite,
    black: logoImageBlack,
}

export class Logo extends PureComponent<Props, State> {
    static defaultProps = {
        type: 'default'
    }

    render(): ReactNode {
        const { type, className } = this.props;

        return (
            <Link to='/' className={ `${styles.logoLink} ${className}` }>
                <img
                    src={logoImgMap[type]}
                    alt='Логотип "Альфа Код"'
                    className={styles.logo}
                />
            </Link>
        );
    }
}
