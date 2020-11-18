import React, { useState } from 'react';

// import { Props } from './props';

import carretDown from 'Assets/images/carret-down.png';
import arrowDown from 'Assets/images/arrow-down.svg';

import { Icon } from 'Components/index';

import styles from './navigation.module.scss';

const navInfo = [
    {
        categoryName: "HTML справочник",
        categoryIconUrl: "html-icon",
        categories: [
            { name: "Все теги", url: "#" },
            { name: "<!-- -->", url: "#" },
            { name: "<!DOCTYPE>", url: "#" },
            {
                name: "<a>", url: "#", childrens: [
                    { url: "href", text: "title" },
                ]
            },
            { name: "<abbr>", url: "#" },
            { name: "<acronym>", url: "#" },
            { name: "<address>", url: "#" },
            { name: "<applet>", url: "#" },
            { name: "<area>", url: "#" },
            { name: "<article>", url: "#" },
            { name: "<area>", url: "#" },
            { name: "<article>", url: "#" }
        ]
    },
    {
        categoryName: "HTML рецепты",
        categoryIconUrl: "html-receipe-icon",
        categories: [
            { name: "Все теги", url: "#" },
            { name: "<!-- -->", url: "#" },
            { name: "<!DOCTYPE>", url: "#" },
            {
                name: "<a>", url: "#", childrens: [
                    { url: "href", text: "title" },
                ]
            },
            { name: "<abbr>", url: "#" },
            { name: "<acronym>", url: "#" },
            { name: "<address>", url: "#" },
            { name: "<applet>", url: "#" },
            { name: "<area>", url: "#" },
            { name: "<article>", url: "#" },
            { name: "<area>", url: "#" },
            { name: "<article>", url: "#" }
        ]
    },
    {
        categoryName: "CSS справочник",
        categoryIconUrl: "css-icon",
        categories: [
            { name: "Все теги", url: "#" },
            { name: "<!-- -->", url: "#" },
            { name: "<!DOCTYPE>", url: "#" },
            {
                name: "<a>", url: "#", childrens: [
                    { url: "href", text: "title" },
                ]
            },
            { name: "<abbr>", url: "#" },
            { name: "<acronym>", url: "#" },
            { name: "<address>", url: "#" },
            { name: "<applet>", url: "#" },
            { name: "<area>", url: "#" },
            { name: "<article>", url: "#" },
            { name: "<area>", url: "#" },
            { name: "<article>", url: "#" }
        ]
    },
    {
        categoryName: "CSS рецепты",
        categoryIconUrl: "css-receipe-icon",
        categories: [
            { name: "Все теги", url: "#" },
            { name: "<!-- -->", url: "#" },
            { name: "<!DOCTYPE>", url: "#" },
            {
                name: "<a>", url: "#", childrens: [
                    { url: "href", text: "title" },
                ]
            },
            { name: "<abbr>", url: "#" },
            { name: "<acronym>", url: "#" },
            { name: "<address>", url: "#" },
            { name: "<applet>", url: "#" },
            { name: "<area>", url: "#" },
            { name: "<article>", url: "#" },
            { name: "<area>", url: "#" },
            { name: "<article>", url: "#" }
        ]
    }
]

export const Navigation = () => {
    // const [showNavigation, setShowNavigation] = useState(false);
    const [activeDirectory, setActiveDirectory] = useState("");
    const [activeCategory, setActiveCategory] = useState("");

    const renderList1 = (directory) => {
        return (
            <div 
                onClick={() => setActiveDirectory(activeDirectory == directory.categoryName ? "" : directory.categoryName)}
                className={ [styles.navigationCategory, styles.dropdown, activeDirectory == directory.categoryName ? styles.active : null].join(' ')} 
                key={directory.categoryName}>
                <div className={styles.navigationCategoryInner}>
                    <Icon
                        className={styles.svgIcon}
                        size="24"
                        icon={directory.categoryIconUrl}
                    />
                    <div className={styles.navigationCategoryInnerName}>
                        {directory.categoryName}
                    </div>
                    <img className={styles.arrowIcon} src={arrowDown} alt="arrow down" />
                </div>
                <div className={ [styles.navigationCategoryCollapse, styles.dropdownInner].join(' ') }>
                        { directory.categories.map((category, i) => {
                            return renderList2(category, i);
                        }) }
                </div>
            </div>
        )
    }
    const renderList2 = (category, i) => {
        return (
            <div
className={ [ styles.dropdown, activeCategory == category.name ? styles.active : null ].join(' ') } key={ i }
                onClick={(e) => {
                    e.stopPropagation();
                    setActiveCategory(activeCategory == category.name ? "" : category.name)
                }}>
                    <div className={ styles.navigationCategoryCollapseItem }>
                        { category.childrens !== undefined ? 
                            <div className={ styles.navigationCategoryCollapseItemCaret }>
                                <img src={carretDown} width="16" height="16" alt="carret down" />
                            </div>
                            : null
                        }
                        <div className={ styles.navigationCategoryCollapseItemIcon }>
                            <Icon className={styles.svgIcon} size="16" icon="document-icon" />
                        </div>
                        <a className={ styles.navigationCategoryCollapseItemName } href={ category.url }>
                            { category.name }
                        </a>
                    </div>
                    { category.childrens !== undefined ? 
                        <ul className={ [styles.navigationCategoryCollapseItemCollapse, styles.dropdownInner, styles.active].join(' ') }>
                            { category.childrens.map((item, i) => {
                                return (
                                    <li key={i}>
                                        <a href={ item.url }>{ item.text }</a>
                                    </li>
                                )
                            }) }
                        </ul>
                        : null }
                </div>
        )
    }
    const navigation = navInfo;
    return (
        <nav className={ styles.navigation }>
            
            {/* <div onClick={() => {setShowNavigation(showNavigation ? false : true)}} className={ styles.navigationCollapseBtn }>
                &gt;
            </div> */}

            { navigation.map(directory => {
                return renderList1(directory); 
            }) }
        </nav>
    );
}
