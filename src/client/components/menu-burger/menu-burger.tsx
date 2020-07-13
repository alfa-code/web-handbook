import React from 'react';

import { Props } from './props';

import styles from './menu-burger.module.scss';

/**
 * Компонент, имитирующий иконку показа мобильного меню. При активации превращается в иконку-крестик.
 * @param props
 * @constructor
 */
export const MenuBurger = (props: Props): JSX.Element => {
    const { active } = props;

    return (
        <div className={ `${styles.container} ${ active ? styles.active : '' }` }>
            <div className={ `${styles.part} ${styles.part1}` } />
            <div className={ `${styles.part} ${styles.part2}` } />
            <div className={ `${styles.part} ${styles.part3}` } />
        </div>
    );
};
