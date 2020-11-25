import React from 'react';

import { Props } from './props';

import { Sidebar, PageTop, DirectoryInfo } from 'Blocks/index';

// import styles from './directory.module.scss';
import { Layout } from 'Pages/index';

export const Directory = (props: Props) => {
    const { directory } = props;

    const {
        title,
        img,
        description,
        lists,
        type,
        currentPath,
    } = directory;

    return (
        <Layout>
            <div className="page">
                <div className="pageContent">
                    <PageTop
                        title={title}
                        description={description}
                        img={img}
                    />
                    {JSON.stringify(lists)}
                    {lists.map((list, i) => {
                        const { title, subtitle, items } = list;
                        const htmlKeys = Object.keys(items);
                        return (
                            <div key={i}>
                                {title ? (
                                    <div className="text-heading-4">
                                        {title}
                                    </div>
                                ) : null}
                                {subtitle ? (
                                    <div className="mt-3 text-body-2">
                                        {subtitle}
                                    </div>
                                ) : null}
                                {htmlKeys.map((key, i) => (
                                    <DirectoryInfo
                                        directory={{
                                            title: key,
                                            items: items[key],
                                            currentPath,
                                        }}
                                        key={i}
                                    />
                                ))}
                            </div>
                        );
                    })}
                </div>
                <Sidebar type={type} />
            </div>
        </Layout>
    );
}
