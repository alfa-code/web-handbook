import React from 'react';
import {useHistory, useLocation} from 'react-router-dom';

import styles from './breadcrumbs.module.scss';

const Breadcrumbs = () => {

    const location = useLocation();
    const history = useHistory();

    // Get full URL after first slash
    const parts = location.pathname.substr(1).split('/');
    // Remove Slash in the end if exists
    if (parts[parts.length - 1] === '') {
        parts.pop();
    }
    // Add home in front of every route
    parts.unshift('home');

    const changePageHandler = (link) => {
        if (link === 'home') {
            return history.push('/');
        }

        let url = '/';
        for (const part of parts) {
            if (part !== 'home') {
                url += part;
            }
            if (link === part) {
                break;
            }
            if (part !== 'home') {
                url += '/';
            }
        }
        history.push(url);
    };

    return (
        <div className={ styles.wrapper }>
            {
                parts.map((part, index) => (
                    <span key={index}>
                        <span className={ styles.link }
                              onClick={ () => changePageHandler(part) }>{ part }
                        </span>
                        <span className={ styles.slash }>/</span>
                    </span>
                ))
            }
        </div>
    );
};

export default Breadcrumbs;
