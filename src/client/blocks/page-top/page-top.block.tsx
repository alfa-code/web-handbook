import React from 'react';

import { Props } from './props';

import styles from './page-top.module.scss';

export const PageTop = ({ title, description, img } : Props) => {
    return (
        <div className={ styles.pageTop }>
            <img src={ img } alt="" />
            <div className={ styles.pageTopContent }>
                <h1
                    className="text-heading-2"
                >
                    { title }
                </h1>
                <div className={["text-subheading", styles.pageTopContentText].join(' ')}>
                    <span>
                        { description }
                    </span>
                </div>
            </div>
        </div>
    );
}

export default PageTop;
