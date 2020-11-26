import React from 'react';

import { Props } from './props';

import styles from './icon.module.scss';

import Sprite from 'Assets/icons/sprite.svg';

export const Icon = ({ size, icon, className }: Props): JSX.Element =>  {
    return (
        <svg width={ size } height={ size } className={ [styles.svgIcon, className].join(' ') }>
            <use width={ size } height={ size } href={ `${Sprite}#${icon}` } >
            </use>
        </svg>
    );
}
