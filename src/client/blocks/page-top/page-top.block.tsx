import React, { Component } from 'react';

import { Props } from './props';

import styles from './page-top.module.scss';

export const PageTop = ({ title, description, img } : Props) => {
    return (
        <div className={ styles.pageTop }>
            <img src={ img } alt="" />
            <div className={ styles.pageTopContent }>
                <div className="text-heading-2">
                    { title }
                </div>
                <div className="text-subheading mt-3">
                    { description }
                </div>
            </div>
        </div>
    );
}
