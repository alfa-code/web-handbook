import React from "react";

import { Props } from "./props";

import { Sidebar, PageTop, DirectoryList } from "Blocks/index";

// import styles from './directory.module.scss';
import { Layout } from "Pages/index";

export const Directory = (props: Props) => {
    const { directory } = props;

    const { title, img, description, lists, type, currentPath } = directory;

    return (
        <Layout>
            <div className="page">
                <div className="pageContent">
                    <PageTop
                        title={title}
                        description={description}
                        img={img}
                    />
                    {lists.map((list, i) => {
                        const { title, subtitle, items } = list;
                        return (
                            <DirectoryList
                                key={i}
                                title={title}
                                subtitle={subtitle}
                                items={items}
                                currentPath={currentPath}
                            />
                        );
                    })}
                </div>
                <Sidebar type={type} />
            </div>
        </Layout>
    );
};
