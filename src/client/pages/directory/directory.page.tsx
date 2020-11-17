import React from 'react';

import { Props } from './props';

import { Layout } from 'Pages/index';
import { PageTop, DirectoryInfo } from 'Blocks/index';

import styles from './directory.module.scss';

export const Directory = ({ directory }: Props) => {
    return (
        <Layout>
            <PageTop
                title={directory.title}
                description={directory.description}
                img={directory.img}
            />
            <div className={styles.page}>
                <div className={styles.pageContent}>
                    {directory.lists.map((list, i) =>
                        <div key={i}>
                            {list.title ?
                                (<div className="text-heading-4">
                                    { list.title}
                                </div>) : null
                            }
                            {list.subtitle ?
                                (<div className="mt-3 text-body-2">
                                    { list.subtitle}
                                </div>) : null
                            }
                            {list.items.map((item, i) =>
                                <DirectoryInfo directory={item} key={i} />
                            )}
                        </div>
                    )
                    }
                </div>
            </div>
        </Layout>
    );
}
