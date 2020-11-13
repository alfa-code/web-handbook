import React from 'react';

import { Props } from './props';

import { Header, Navigation, Sidebar, Footer, PageTop } from 'Blocks/index';

import PageTopImage from 'Assets/images/html-instruments.svg'

import styles from './recipes.module.scss';

export const Recipes = ({themes} : Props) => {
    return (
        <div>
            <Header  />
            <div className="layout">
                <Navigation />
                <div className="content">

                    <div className={ styles.page }>
                        {/* <include src='src/templates/components/common/breadcrumbs.html' locals='{
                            "path": {{path}}
                        }'></include>
                     */}
                        <div className={ styles.pageContent }>
                            <PageTop 
                                title="HTML рецепты" 
                                description="Подборка полезных HTML рецептов" 
                                img={ PageTopImage } />
                        </div>
                     
                        { themes.map((theme, i) => 
                            <div>
                                <div className="mt-5 text-heading-4">{ theme.title }</div>
                                <ul className={ styles.recipesList }>
                                    { theme.recipes.map((recipe, i) => 
                                        <li className="mt-3">
                                            <a href={recipe.url} className="link-body-1">{recipe.text}</a>
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


                </div>
                <Sidebar />
            </div>
            <Footer />
        </div>
    );
}
