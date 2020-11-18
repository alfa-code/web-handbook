import React from 'react';

import { Props } from './props';

import styles from './tag.module.scss';

export const Tag = ({ className, text } : Props) => {
    return (
        <span className={ [styles.tag, styles[className]].join(' ') }>
            {text}
        </span>
    );
}
