import React, { useState } from "react";

import { Logo, Icon } from "Components/index";

// import { Props } from './props';
import styles from "./header.module.scss";
import { NavLink } from "react-router-dom";
import { Navigation } from "Blocks/index";

export const Header = () => {
    const [activeDropdown, setActiveDropdown] = useState("");
    const [activeHeader, setActiveHeader] = useState(false);
    const [activeSearch, setActiveSearch] = useState(false);

    function closeDropdowm(e) {
        if (e.target.closest(".dropdown")) {
            return;
        }
        setActiveDropdown("");
    }
    const toggleDropdowm = (e, key) => {
        if (activeDropdown == key) {
            setActiveDropdown("");
            document.body.onclick = null;
        } else {
            setActiveDropdown(key);
            document.body.onclick = closeDropdowm;
        }
        e.stopPropagation();
    };

    return (
        <header className={styles.header}>
            <Logo />
            <div className={styles.headerMenu}>
                <div className={styles.headerMenuLink}>
                    <NavLink
                        activeClassName={styles.active}
                        exact
                        to="/"
                        className={styles.headerMenuLink}
                    >
                        Главное
                    </NavLink>
                </div>
                <div
className={ [styles.dropdown, activeDropdown == "HTML" ? styles.active : ""].join(' ') }
                    onClick={() => setActiveDropdown(activeDropdown == "HTML" ? "" : "HTML")}>
                    <div className={ styles.dropdownActivator }>
                        HTML
                        <Icon className={styles.svgIcon} size="16" icon="arrow-down"/>
                    </div>

                    <div className={ styles.dropdownInner } >
                        <NavLink activeClassName={ styles.active } to="/html-list" className={ styles.dropdownInnerLink }>HTML справочник</NavLink>
                        <NavLink activeClassName={ styles.active } to="/html-list/recipes" className={ styles.dropdownInnerLink }>HTML рецепты</NavLink>
                    </div>
                </div>
                <div
className={ [styles.dropdown, activeDropdown == "CSS" ? styles.active : ""].join(' ')}
                    onClick={() => setActiveDropdown(activeDropdown == "CSS" ? "" : "CSS")}>
                    <div className={ styles.dropdownActivator }>
                        CSS
                        <Icon className={styles.svgIcon} size="16" icon="arrow-down"/>
                    </div>

                    <div className={ styles.dropdownInner }>
                        <NavLink activeClassName={ styles.active } to="/css-list" className={ styles.dropdownInnerLink }>CSS справочник</NavLink>
                        <NavLink activeClassName={ styles.active } to="/css-list/recipes" className={ styles.dropdownInnerLink }>CSS рецепты</NavLink>
                    </div>
                </div>
            </div>

            <div className={ [styles.headerSearch, activeSearch ? styles.mobileActiveSearch : ""].join(" ") }>
                <div className={ styles.inputWrapper }>
                    <input className={ styles.inputWrapperInput } type="text" placeholder="Поиск по сайту" />
                    <div className={ styles.inputWrapperIcon } onClick={() => {setActiveSearch(!activeSearch)}}>
                        <Icon className={styles.svgIcon} size="24" icon="search-icon" />
                    </div>
                </div>
            </div>
            <div
                className={styles.headerBtn}
                onClick={() => {
                    document.body.style.overflow = !activeHeader
                        ? "hidden"
                        : "auto";
                    if (activeHeader) setActiveHeader(false);
                    setActiveSearch(!activeSearch);
                }}
            >
                <Icon
                    size="24px"
                    icon={activeSearch ? "close-icon" : "search-icon"}
                />
            </div>
            <div
                className={styles.headerBtn}
                onClick={() => {
                    document.body.style.overflow = !activeHeader
                        ? "hidden"
                        : "auto";
                    if (activeSearch) setActiveSearch(false);
                    setActiveHeader(!activeHeader);
                }}
            >
                <Icon
                    size="24px"
                    icon={activeHeader ? "close-icon" : "menu-icon"}
                />
            </div>
            <div
                className={[
                    styles.navigationMobile,
                    activeHeader ? styles.activeHeader : "",
                ].join(" ")}
            >
                <Navigation />
            </div>
        </header>
    );
};
