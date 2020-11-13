import React from 'react';

import { Props } from './props';

import styles from './MainPageLink.module.scss';

export const MainPageLink = ({ title, subTitle, image, url } : Props) => {
    return (
        <div className={ styles.mainPageLink }>

            <div className={ styles.mainPageLinkContent }>
                <div className="text-heading-4">{ title }</div>
                <div className="mt-2 text-body-2">
                    { subTitle }
                </div>
                <a href={ url } className={ styles.mainPageLinkContentLink }>
                    Смотреть &lt;
                </a>
            </div>
            <img src={ image } alt={ title } />
        </div>
    );
}
