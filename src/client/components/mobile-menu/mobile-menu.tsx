import React from 'react';
import { HeaderNavigation } from 'Components/header-navigation';

import styles from './mobile-menu.module.scss'
import { HeaderUserContainer } from 'Src/client/containers/header-user-container';

/**
 * Компонент мобильного меню
 * @constructor
 */
export const MobileMenu = () => {
    return (
        <div className={ styles.base }>
            <HeaderNavigation />
            <div className={ styles.user }>
                <HeaderUserContainer />
            </div>
        </div>
    );
};
