import React from 'react';

import { Props } from './props';

import { Sidebar, PageTop, DirectoryInfo } from 'Blocks/index';

import styles from './directory.module.scss';
import { Layout } from 'Pages/index';

export const Directory = ({ directory, type } : Props) => {
    return (
        <Layout>
            <div className="page">
                <div className="pageContent">
                    <PageTop 
                        title={directory.title} 
                        description={directory.description} 
                        img={directory.img} />
                    { directory.lists.map(list => 
                            <div>
                                { list.title ?
                                    (<div className="text-heading-4">
                                        { list.title }
                                    </div>) : null
                                }
                                { list.subtitle ?
                                    (<div className="mt-3 text-body-2">
                                        { list.subtitle }
                                    </div>) : null
                                }
                                { list.items.map((item, i) => 
                                    <DirectoryInfo directory={item} />
                                ) }
                            </div>
                        )
                    }
                </div> 
                <Sidebar type={type} />
            </div>
        </Layout>
    );
}
