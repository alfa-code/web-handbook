import React from 'react';

import { Props } from './props';

import styles from './icon.module.scss';


export const Icon = ({ size, icon, className }: Props): JSX.Element =>  {
    return (
        <svg width={ size } height={ size } className={ [styles.svgIcon, className].join(' ') }>
            <use width={ size } height={ size } href={ `/assets/svg/sprite.svg#${icon}` } >
            </use>
        </svg>
    );
}
