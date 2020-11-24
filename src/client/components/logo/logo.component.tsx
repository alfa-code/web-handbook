import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import LogoImage from 'Assets/icons/logo/logo.svg';
import LogoImageMobile from 'Assets/icons/logo/logo_mobile.svg';

import { Props } from './props';

import styles from './logo.module.scss';

export class Logo extends Component<Props> {
    render() {
        return (
            <Link to="/" className={ styles.logo }>
                <img className={ styles.logoDesktop } src={ LogoImage } alt="Logo"/>
                <img className={ styles.logoMobile } src={ LogoImageMobile } alt="Logo"/>
            </Link>
        );
    }
}
