import React, { Component } from 'react';

import LogoImage from 'Assets/icons/logo_primary_version_color_dark_text.svg';

import { Props } from './props';

export class Logo extends Component<Props> {
    render() {
        return (
            <img src={ LogoImage } alt="Logo"/>
        );
    }
}
