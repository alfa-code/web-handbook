import React from 'react';

import { Props } from './props';

import styles from './breadcrumbs.module.scss';

import { Link } from 'react-router-dom';

export const Breadcrumbs = ({ breadcrumbs } : Props) => {
    return (
        <nav
            tabIndex={ 0 }
            className={ styles.breadcrumbs }
            aria-label="хлебные крошки"
        >
            <span>
                <Link
                    className={ styles.breadcrumbsItem }
                    to="/"
                    tabIndex={ 0 }
                >
                    Главная
                </Link>
            </span>
            { breadcrumbs.map((item, key) =>
                <span key={ key }>
                    <span className={ styles.breadcrumbsSeparator }>
                        /
                    </span>
                    <Link
                        className={ styles.breadcrumbsItem }
                        to={ item.url }
                        tabIndex={ 0 }
                    >
                        { item.name }
                    </Link>
                </span>
            )}
        </nav>
    );
}
