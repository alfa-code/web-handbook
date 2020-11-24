import React from 'react';

import { Props } from './props';

import { Sidebar, PageTop } from 'Blocks/index';

import { BreadcrumbsContainer } from 'Containers/breadcrumbs-container';

import PageTopImage from 'Assets/images/html-instruments.svg'

import styles from './recipes.module.scss';
import { Link } from 'react-router-dom';
import { Layout } from 'Pages/index';

export const Recipes = ({ themes, type } : Props) => {
    return (
        <Layout>
            <div className="page">

                <div className="pageContent">
                    <BreadcrumbsContainer />
                    <PageTop
                        title="HTML рецепты"
                        description="Подборка полезных HTML рецептов"
                        img={ PageTopImage } />


                    { themes.map((theme, i) =>
                        <div key={ i }>
                            <Link to={theme.url} className="mt-5 text-heading-4">{ theme.title }</Link>
                            <ul className={ styles.recipesList }>
                                { theme.recipes.map((recipe, i) =>
                                    <li key={ i }>
                                        <Link to={recipe.url} className="link-body-1">{recipe.text}</Link>
                                    </li>
                                )}
                            </ul>
                        </div>
                        )
                    }
                    {/* <div className="mt-6">
                        <include src='src/templates/components/common/comments.html'></include>
                    </div> */}
                </div>
                <Sidebar type={type} />
                </div>
        </Layout>
    );
}
