import React from 'react';

import { Props } from './props';

import styles from './recipes-theme.module.scss';

import { Sidebar, Breadcrumbs } from 'Blocks/index';
import { Link } from 'react-router-dom';

import { Layout } from 'Pages/index';

export const RecipesTheme = ({ theme, type } : Props) => {
    return (
        <Layout>
            <div className="page">

                <div className="pageContent">
                    <Breadcrumbs path={["Главное", "HTML справочник "]} />

                    <div className="mt-4 text-heading-2">
                        {theme.title}
                    </div>

                    { theme.recipes.map((recipe, key) => {
                        return (
                            <div>
                                <div className={ styles.recipeLink }>
                                    <Link to={recipe.url} className="text-heading-4">
                                        { recipe.text }
                                    </Link>
                                </div>
                                <div className="mt-3 text-body-2">
                                    { recipe.description }
                                </div>
                            </div>
                        )
                    })}
                </div>
                <Sidebar type={type} />
                </div>
        </Layout>
    );
}
