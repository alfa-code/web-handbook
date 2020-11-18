import React from 'react';

import { Props } from './props';

import { Sidebar, Breadcrumbs } from 'Blocks/index';

import styles from './category.module.scss';
import { Link } from 'react-router-dom';
import { Layout } from 'Pages/index';

export const Category = ({ title, types, type }) => {
    return (
        <Layout>
            <div className="page">
                <div className="pageContent">
                    <Breadcrumbs path={["Главное", "HTML справочник "]} />
                    
                    <div className="mt-4">
                        <div className="text-heading-2">{title}</div>
                    </div>

                    { types.map((item, key) => {
                        return (
                            <div key={key}>
                                <div className="mt-5 mt-sm-3">
                                    <Link to="/tag" className="text-heading-4">
                                        {item.type}
                                    </Link>
                                </div>
                                <div className="mt-3 mt-sm-2 text-body-2">
                                    {item.description}
                                </div>
                            </div>
                        )
                    })
                    }
                </div>
                <Sidebar type={type} />
            </div>
        </Layout>
    );
}
