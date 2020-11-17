import React, { useState } from 'react';

import { Link } from "react-router-dom";

import { Logo, Icon } from 'Components/index';

import { Props } from './props';
import styles from './header.module.scss';

export const Header = () => {
    const [activeDropdown, setActiveDropdown] = useState("");

    return (
        <header className={ styles.header }>
            <Logo />
            <div className={ styles.headerMenu }>
                <Link
                    to="/"
                    className={ styles.headerMenuLink }
                >
                    Главное
                </Link>
                <div
className={ [styles.dropdown, activeDropdown == "HTML" ? styles.active : ""].join(' ') }
                    onClick={() => setActiveDropdown(activeDropdown == "HTML" ? "" : "HTML")}>
                    HTML 
                    <Icon className={styles.svgIcon} size="16" icon="arrow-down"/>

                    <div className={ styles.dropdownInner } >
                        <Link
                            to="/html"
                            className={ styles.dropdownInnerLink }
                        >
                            HTML справочник
                        </Link>
                        <Link
                            to="/"
                            className={ styles.dropdownInnerLink }
                        >
                            HTML рецепты
                        </Link>
                    </div>
                </div>
                <div
className={ [styles.dropdown, activeDropdown == "CSS" ? styles.active : ""].join(' ')}
                    onClick={() => setActiveDropdown(activeDropdown == "CSS" ? "" : "CSS")}>
                    CSS 
                    <Icon className={styles.svgIcon} size="16" icon="arrow-down"/>

                    <div className={ styles.dropdownInner }>
                        <Link
                            to="/css"
                            className={ styles.dropdownInnerLink }
                        >
                            CSS справочник
                        </Link>
                        <Link
                            to="/"
                            className={ styles.dropdownInnerLink }
                        >
                            CSS рецепты
                        </Link>
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
