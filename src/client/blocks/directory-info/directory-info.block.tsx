import React from "react";

import { Props } from "./props";

import urljoin from 'url-join';

import { Link } from "react-router-dom";

import styles from "./directory-info.module.scss";

export const DirectoryInfo = (props: Props) => {
    const {
        directory: { title, items, currentPath },
    } = props;

    return (
        <div className={styles.directoryList}>
            <div className={styles.directoryListTop}>
                <div className="text-heading-4">
                    { title }
                </div>
            </div>
            <ul>
                {items.length
                    ? items.map((thing, i) => {
                        const { name, obsolete } = thing;
                        return (
                            <li
                                key={i}
                                className="text-body-1"
                            >
                                {/* TODO: Поменять ключи */}
                                <Link
                                    className={ `
                                        ${styles.link}
                                        text-body-1 ${obsolete ? `${styles.label} ${styles.labelOld}`: ''}
                                    ` }
                                    to={ urljoin(currentPath, name) }
                                >
                                    { `<${name}>` }
                                    {/*
                                    { obsolete && (
                                        <div className={styles.label}>
                                            устарел
                                        </div>
                                    )} */}
                                </Link>
                            </li>
                        )
                    })
                    : null}
            </ul>
        </div>
    );
};
