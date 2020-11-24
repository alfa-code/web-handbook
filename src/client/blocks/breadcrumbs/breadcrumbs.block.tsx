import React from 'react';

import { Props } from './props';

import styles from './breadcrumbs.module.scss';

import { Link } from 'react-router-dom';

export const Breadcrumbs = ({ breadcrumbs } : Props) => {
    return (
        <div className={ styles.breadcrumbs }>
            <span>
                <Link
                    className={ styles.breadcrumbsItem }
                    to="/"
                >
                    Главная
                </Link>
                <span className={ styles.breadcrumbsSeparator }>
                    /
                </span>
            </span>
            { breadcrumbs.map((item, key) =>
                <span key={ key }>
                    <Link
                        className={ styles.breadcrumbsItem }
                        to={ item.url }
                    >
                        { item.name }
                    </Link>
                    <span className={ styles.breadcrumbsSeparator }>
                        /
                    </span>
                </span>
            )}
        </div>
    );
}
