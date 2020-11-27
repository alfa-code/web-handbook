import React from "react";

import { Props } from "./props";

import { Link } from "react-router-dom";

// import { Tag } from 'Components/index';

import styles from "./directory-info.module.scss";

export const DirectoryInfo = (props: Props) => {
    const {
        directory: { title, items, currentPath },
    } = props;

    return (
        <div className={styles.directoryList}>
            <div className={styles.directoryListTop}>
                <div className="text-heading-4">{title}</div>
            </div>
            <ul>
                {items.length
                    ? items.map((thing, i) => {
                        return (
                          <li key={i} className="text-body-1">
                              {/* TODO: Поменять ключи */}
                              <Link
                                  className="text-body-1"
                                  to={`${currentPath}${thing}`}
                              >
                                  {thing}
                              </Link>
                          </li>
                      )
                    })
                    : null}
            </ul>
        </div>
    );
};
