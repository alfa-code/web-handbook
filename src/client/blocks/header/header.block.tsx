import React, { useState } from 'react';

import { Props } from './props';

import { Logo, Icon } from 'Components/index';

import styles from './header.module.scss';

export const Header = () => {
    const [activeDropdown, setActiveDropdown] = useState("");

    return (
        <header className={ styles.header }>
            <Logo />
            <div className={ styles.headerMenu }>
                <a href="#" className={ styles.headerMenuLink }>Главное</a>
                <div className={ [styles.dropdown, activeDropdown == "HTML" ? styles.active : ""].join(' ') }
                    onClick={() => setActiveDropdown(activeDropdown == "HTML" ? "" : "HTML")}>
                    HTML 
                    <Icon className={styles.svgIcon} size="16" icon="arrow-down"/>

                    <div className={ styles.dropdownInner } >
                        <a href="#" className={ styles.dropdownInnerLink }>HTML справочник</a>
                        <a href="#" className={ styles.dropdownInnerLink }>HTML рецепты</a>
                    </div>
                </div>
                <div className={ [styles.dropdown, activeDropdown == "CSS" ? styles.active : ""].join(' ')}
                    onClick={() => setActiveDropdown(activeDropdown == "CSS" ? "" : "CSS")}>
                    CSS 
                    <Icon className={styles.svgIcon} size="16" icon="arrow-down"/>

                    <div className={ styles.dropdownInner }>
                        <a href="#" className={ styles.dropdownInnerLink }>CSS справочник</a>
                        <a href="#" className={ styles.dropdownInnerLink }>CSS рецепты</a>
                    </div>
                </div>
            </div>
            <div className={ styles.headerSearch }>
                <div className={ styles.inputWrapper }>
                    <input className={ styles.inputWrapperInput }  type="text" placeholder="Поиск по сайту" />
                    <div className={ styles.inputWrapperIcon }>
                        <Icon className={styles.svgIcon} size="24" icon="search-icon" />
                    </div>
                </div>
            </div>
        </header>
    );
}
