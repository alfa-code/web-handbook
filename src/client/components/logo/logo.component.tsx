import React, { Component } from 'react';

import LogoImage from 'Assets/icons/logo/logo.svg';

import { Props } from './props';

import styles from './logo.module.scss';

export class Logo extends Component<Props> {
    render() {
        return (
            <a href="#" className={ styles.logo }>
                <img src={ LogoImage } alt="Logo"/>
            </a>
        );
    }
}
