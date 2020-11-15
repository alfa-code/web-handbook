import React, { Component } from 'react';

import { Props } from './props';

import { Icon } from 'Components/index';
 
import styles from './button.module.scss';

export const Button = ({ text, icon, className } : Props) => {
    return (
        <a href="#" className={ [styles.btn, styles[className]].join(' ') }>
            { icon ? <Icon size="16" icon={icon} /> : ""}    
            { text }
        </a>
    );
}
