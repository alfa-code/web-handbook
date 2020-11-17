import React from 'react';

import { Props } from './props';

import styles from './recipes-theme.module.scss';

import { Header, Navigation, Sidebar, Footer, PageTop, Breadcrumbs } from 'Blocks/index';

export const RecipesTheme = ({theme} : Props) => {
    return (
        <div>
            <Header  />
            <div className="layout">
                <Navigation />
                <div className="content">

                    <div className="page">

                        <div className="pageContent">
                            <Breadcrumbs path={["Главное", "HTML справочник "]} />
                        
                            <div className="mt-4 text-heading-2">
                                {theme.title}
                            </div>

                            { theme.recipes.map((recipe, key) => {
                                return (
                                    <div>
                                        <div className="mt-5 text-heading-4">
                                            { recipe.text }
                                        </div>
                                        <div className="mt-3 text-body-2">
                                            { recipe.description }
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <Sidebar />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
