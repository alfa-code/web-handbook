import React from 'react';

import { Props } from './props';

import styles from './breadcrumbs.module.scss';

export const Breadcrumbs = ({path} : Props) => {
    return (
        <div className={ styles.breadcrumbs }>
            { path.map((item, key) => 
                <span key={key}>
                    <span className={ styles.breadcrumbsItem }>{item}</span>
                    <span className={ styles.breadcrumbsSeparator }>/</span>
                </span>
            )}
        </div>
    );
}
