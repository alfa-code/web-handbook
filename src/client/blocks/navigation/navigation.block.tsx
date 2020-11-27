import React, { useState } from "react";

import { Link } from 'react-router-dom';


import { Props } from './props';

// import carretDown from "Assets/images/carret-down.png";
import arrowDown from "Assets/images/arrow-down.svg";

import { Icon } from "Components/index";

import styles from "./navigation.module.scss";

const navInfo = [
    {
        categoryName: "HTML справочник",
        categoryIconUrl: "html-icon",
    },
    // {
    //     categoryName: "HTML рецепты",
    //     categoryIconUrl: "html-receipe-icon",
    //     categories: [
    //         {
    //             name: "Все теги",
    //             url: "#",
    //         },
    //         {
    //             name: "<!-- -->",
    //             url: "#",
    //         },
    //         {
    //             name: "<!DOCTYPE>",
    //             url: "#",
    //         },
    //         {
    //             name: "<a>",
    //             url: "#",
    //             childrens: [
    //                 {
    //                     url: "href",
    //                     text: "title",
    //                 },
    //             ],
    //         },
    //         {
    //             name: "<abbr>",
    //             url: "#",
    //         },
    //         {
    //             name: "<acronym>",
    //             url: "#",
    //         },
    //         {
    //             name: "<address>",
    //             url: "#",
    //         },
    //         {
    //             name: "<applet>",
    //             url: "#",
    //         },
    //         {
    //             name: "<area>",
    //             url: "#",
    //         },
    //         {
    //             name: "<article>",
    //             url: "#",
    //         },
    //         {
    //             name: "<area>",
    //             url: "#",
    //         },
    //         {
    //             name: "<article>",
    //             url: "#",
    //         },
    //     ],
    // },
    // {
    //     categoryName: "CSS справочник",
    //     categoryIconUrl: "css-icon",
    //     categories: [
    //         {
    //             name: "Все теги",
    //             url: "#",
    //         },
    //         {
    //             name: "<!-- -->",
    //             url: "#",
    //         },
    //         {
    //             name: "<!DOCTYPE>",
    //             url: "#",
    //         },
    //         {
    //             name: "<a>",
    //             url: "#",
    //             childrens: [
    //                 {
    //                     url: "href",
    //                     text: "title",
    //                 },
    //             ],
    //         },
    //         {
    //             name: "<abbr>",
    //             url: "#",
    //         },
    //         {
    //             name: "<acronym>",
    //             url: "#",
    //         },
    //         {
    //             name: "<address>",
    //             url: "#",
    //         },
    //         {
    //             name: "<applet>",
    //             url: "#",
    //         },
    //         {
    //             name: "<area>",
    //             url: "#",
    //         },
    //         {
    //             name: "<article>",
    //             url: "#",
    //         },
    //         {
    //             name: "<area>",
    //             url: "#",
    //         },
    //         {
    //             name: "<article>",
    //             url: "#",
    //         },
    //     ],
    // },
    // {
    //     categoryName: "CSS рецепты",
    //     categoryIconUrl: "css-receipe-icon",
    //     categories: [
    //         {
    //             name: "Все теги",
    //             url: "#",
    //         },
    //         {
    //             name: "<!-- -->",
    //             url: "#",
    //         },
    //         {
    //             name: "<!DOCTYPE>",
    //             url: "#",
    //         },
    //         {
    //             name: "<a>",
    //             url: "#",
    //             childrens: [
    //                 {
    //                     url: "href",
    //                     text: "title",
    //                 },
    //             ],
    //         },
    //         {
    //             name: "<abbr>",
    //             url: "#",
    //         },
    //         {
    //             name: "<acronym>",
    //             url: "#",
    //         },
    //         {
    //             name: "<address>",
    //             url: "#",
    //         },
    //         {
    //             name: "<applet>",
    //             url: "#",
    //         },
    //         {
    //             name: "<area>",
    //             url: "#",
    //         },
    //         {
    //             name: "<article>",
    //             url: "#",
    //         },
    //         {
    //             name: "<area>",
    //             url: "#",
    //         },
    //         {
    //             name: "<article>",
    //             url: "#",
    //         },
    //     ],
    // },
];

export const Navigation = (props: Props) => {
    // const [showNavigation, setShowNavigation] = useState(false);
    const [activeDirectory, setActiveDirectory] = useState("");
    const [activeCategory, setActiveCategory] = useState("");

    const renderList1 = (directory) => {
        return (
            <div
                onClick={() =>
                    setActiveDirectory(
                        activeDirectory == directory.categoryName
                            ? ""
                            : directory.categoryName
                    )
                }
                className={[
                    styles.navigationCategory,
                    styles.dropdown,
                    activeDirectory == directory.categoryName
                        ? styles.active
                        : null,
                ].join(" ")}
                key={directory.categoryName}
            >
                <div className={styles.navigationCategoryInner}>
                    <Icon
                        className={styles.svgIcon}
                        size="24"
                        icon={directory.categoryIconUrl}
                    />
                    <div className={styles.navigationCategoryInnerName}>
                        {directory.categoryName}
                    </div>
                    <img
                        className={styles.arrowIcon}
                        src={arrowDown}
                        alt="arrow down"
                    />
                </div>
                <div
                    className={[
                        styles.navigationCategoryCollapse,
                        styles.dropdownInner,
                    ].join(" ")}
                >
                    { props.tags.map((tag, i) => {
                        return renderList2(tag, i);
                    })}
                </div>
            </div>
        );
    };

    const renderList2 = (tag, i) => {
        return (
            <div
                className={[
                    styles.dropdown,
                    // activeCategory == tag ? styles.active : null,
                ].join(" ")}
                key={i}
                // onClick={(e) => {
                //     e.stopPropagation();
                //     setActiveCategory(
                //         activeCategory == category.name ? "" : category.name
                //     );
                // }}
            >
                <div className={styles.navigationCategoryCollapseItem}>
                    <div className={styles.navigationCategoryCollapseItemIcon}>
                        <Icon
                            className={styles.svgIcon}
                            size="16"
                            icon="document-icon"
                        />
                    </div>
                    <Link
                        className={styles.navigationCategoryCollapseItemName}
                        to={ `/html-list/${tag}` }
                    >
                        { tag }
                    </Link>
                </div>

            </div>
        );
    };

    const navigation = navInfo;
    return (
        <nav className={styles.navigation}>
            {/* <div onClick={() => {setShowNavigation(showNavigation ? false : true)}} className={ styles.navigationCollapseBtn }>
                &gt;
            </div> */}

            {navigation.map((directory) => {
                return renderList1(directory);
            })}
        </nav>
    );
};
