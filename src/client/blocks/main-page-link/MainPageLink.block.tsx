import React from 'react';

import { Props } from './props';
import { Link } from "react-router-dom";

import styles from './MainPageLink.module.scss';

export const MainPageLink = (props: Props) => {
    const {
        title,
        subTitle,
        image,
        // url
    }= props;

    return (
        <div className={ styles.mainPageLink }>
            <div className={ styles.mainPageLinkContent }>
                <div className="text-heading-4">{ title }</div>
                <div className="mt-2 text-body-2">
                    { subTitle }
                </div>
                <Link to="/directory-html" className={ styles.mainPageLinkContentLink }>
                    <span>Смотреть &gt;</span>
                </Link>
            </div>
            <img src={ image } alt={ title } />
        </div>
    );
}
