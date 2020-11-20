import React, { useState } from 'react';

import { Logo, Icon } from 'Components/index';

// import { Props } from './props';
import styles from './header.module.scss';
import { NavLink } from 'react-router-dom';

export const Header = () => {
    const [activeDropdown, setActiveDropdown] = useState("");
    const [activeHeader, setActiveHeader] = useState(false)
    const [activeSearch, setActiveSearch] = useState(false)

    // const activateSearch = (val) => {
    //     setActiveSearch(val);
    // }

    return (
        <header className={ styles.header }>
            <Logo />
            <div className={ [ styles.headerMenu, activeHeader ? styles.activeHeader : ""].join(" ") }>
                <div className={ styles.headerMenuLink }>
                    <NavLink activeClassName={ styles.active } exact to="/" className={ styles.headerMenuLink }>Главное</NavLink>
                </div>
                <div
className={ [styles.dropdown, activeDropdown == "HTML" ? styles.active : ""].join(' ') }
                    onClick={() => setActiveDropdown(activeDropdown == "HTML" ? "" : "HTML")}>
                    <div className={ styles.dropdownActivator }>
                        HTML 
                        <Icon className={styles.svgIcon} size="16" icon="arrow-down"/>
                    </div>

                    <div className={ styles.dropdownInner } >
                        <NavLink activeClassName={ styles.active } to="/html" className={ styles.dropdownInnerLink }>HTML справочник</NavLink>
                        <NavLink activeClassName={ styles.active } to="/html/recipes" className={ styles.dropdownInnerLink }>HTML рецепты</NavLink>
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
                        <NavLink activeClassName={ styles.active } to="/css" className={ styles.dropdownInnerLink }>CSS справочник</NavLink>
                        <NavLink activeClassName={ styles.active } to="/css/recipes" className={ styles.dropdownInnerLink }>CSS рецепты</NavLink>
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
            <div className={ styles.headerBtn } onClick={() => {setActiveHeader(!activeHeader)}}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </header>
    );
}
