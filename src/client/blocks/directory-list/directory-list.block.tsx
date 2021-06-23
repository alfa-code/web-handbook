import React from "react";

import { Props } from "./props";

import { DirectoryInfo } from "Blocks/index";

import styles from "./directory-list.module.scss";

export const DirectoryList = (props: Props) => {
    const { items } = props;
    const keys = Object.keys(items);

    return (
        <div>
            {props.title ? (
                <div className="text-heading-4">
                    {props.title}
                </div>
            ) : null}
            {props.subtitle ? (
                <div className="mt-3 text-body-2">
                    {props.subtitle}
                </div>
            ) : null}
            {keys.map((key, i) => (
                <DirectoryInfo
                    directory={{
                        title: key,
                        items: items[key] ,
                        currentPath: props.currentPath,
                    }}
                    key={i}
                />
            ))}
        </div>
    );
};
