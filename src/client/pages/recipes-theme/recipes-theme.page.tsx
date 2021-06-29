import React from 'react';
import { Link } from 'react-router-dom';

import { BreadcrumbsContainer } from 'Containers/breadcrumbs-container';

import { Props } from './props';

import styles from './recipes-theme.module.scss';


export const RecipesTheme = ({ theme, type }: Props) => {
    return (
        <div className="page">

            <div className="pageContent">
                <BreadcrumbsContainer />

                <div className="mt-4 text-heading-2">
                    {theme.title}
                </div>

                {theme.recipes.map((recipe, key) => {
                    return (
                        <div key={key}>
                            <div className={styles.recipeLink}>
                                <Link to={recipe.url} className="text-heading-4">
                                    {recipe.text}
                                </Link>
                            </div>
                            <div className="mt-3 text-body-2">
                                {recipe.description}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
