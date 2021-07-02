import React from "react";

import { Props } from "./props";

import { PageTop, DirectoryList } from "Blocks/index";

import { mapHtmlTagsListByAlphabet } from 'Utils/index';

// import styles from './directory.module.scss';

const Directory = (props: Props) => {
    const { directory } = props;

    const { title, img, description, lists, type, currentPath } = directory;

    return (
        <div className="page">
            <div className="pageContent">
                <PageTop
                    title={title}
                    description={description}
                    img={img}
                />
                {lists.map((list, i) => {
                    const { items } = list;
                    const mappedItems = mapHtmlTagsListByAlphabet(items);

                    return (
                        <DirectoryList
                            key={i}
                            items={ mappedItems }
                            currentPath={currentPath}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Directory;
