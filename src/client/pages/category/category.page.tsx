import React from 'react';

import { Props } from './props';

import { Header, Navigation, Sidebar, Footer, Breadcrumbs } from 'Blocks/index';

import styles from './category.module.scss';

export const Category = ({title, types}) => {
    return (
        <div>
            <Header  />
            <div className="layout">
                <Navigation />
                <div className="content">

                    <div className="page">
                        <div className="pageContent">
                            <Breadcrumbs path={["Главное", "HTML справочник "]} />
                            
                            <div className="mt-4">
                                <div className="text-heading-2">{title}</div>
                            </div>

                            { types.map((item, key) => {
                                return (
                                    <div key={key}>
                                        <div className="mt-5 text-heading-4">
                                            {item.type}
                                        </div>
                                        <div className="mt-3 text-body-2">
                                            {item.description}
                                        </div>
                                    </div>
                                )
                            })
                            }
                        </div>
                        <Sidebar />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
