import React from 'react';

import { Switch, Route } from 'react-router-dom';

import { Footer } from 'Blocks/index';
import { HeaderContainer } from 'Containers/index';

// TODO: Временно выключено
// import { Sidebar } from 'Blocks/index';

import { NavigationContainer } from 'Containers/navigation-container';

import { LoadablePage } from 'Pages/loadable-page';

import {
    Main,
    NotFound,
    Recipes,
    // AttributesListPage,
    // Category,
    // RecipesTheme,
    // Recipe,
    // Property
} from 'Pages/index';

import CONSTANTS from 'Src/client/app/constants';

export const Layout = () => {
    return (
        <div className="layout">
            <HeaderContainer />
            <NavigationContainer />
            <main className="content">
                <Switch>
                    <Route
                        exact
                        path='/'
                        component={ Main }
                    />
                    {/* <Route
                        exact
                        path='/html-list'
                        component={ ListPage }
                    /> */}

                    <Route
                        exact
                        path='/html-list'
                        render={ (routeProps) => (
                            <LoadablePage type='elements-list' { ...routeProps } />
                        )}
                    />

                    {/* <Route
                        exact
                        path='/html-list/recipes'
                        component={ () => <Recipes themes={ CONSTANTS.themes }  type="html" /> }
                    /> */}
                    <Route
                        exact
                        path='/html-list/:htmlTag'
                        // component={ TagPageContainer }
                        render={ (routeProps) => (
                            <LoadablePage type='element-info' { ...routeProps } />
                        )}
                    />

                    {/* TODO: Этот функционал выкатим вторым этапом */}
                    {/* <Route
                        exact
                        path='/css-list'
                        component={ CssListContainer }
                    />
                    <Route
                        exact
                        path='/css-list/recipes'
                        component={ () => <Recipes themes={ CONSTANTS.themes }  type="css" /> }
                    />
                    <Route
                        exact
                        path='/css-list/:cssRule'
                        component={ () => <Property /> }
                    /> */}

                    {/* TODO: Статьи выкатим третьим этапом */}
                    {/* <Route
                        exact
                        path='/recipes/theme'
                        component={ () => <RecipesTheme
                            theme={CONSTANTS.themes[0]}  type="html" /> }
                    />
                    <Route
                        exact
                        path='/recipes/theme/recipe'
                        component={ () => <Recipe
                            type="html"
                            title="Как убрать полосы прокрутки?" /> }
                    />
                    <Route
                        exact
                        path='/tag-types'
                        component={ () => <Category
                            type="html"
                            title={CONSTANTS.tagTypes.title}
                            types={CONSTANTS.tagTypes.types} /> }
                    /> */}

                    {/* <Route
                        exact
                        path='/attribute-list'
                        component={ () => <AttributesListPage /> }
                    /> */}

                    <Route
                        exact
                        path='/attribute-list'
                        render={ (routeProps) => (
                            <LoadablePage type='attributes-list' { ...routeProps } />
                        )}
                    />

                    <Route
                        exact
                        path='/attribute-list/:htmlAttribute'
                        // component={ () => <WorkInProgress /> }
                        render={ (routeProps) => (
                            <LoadablePage type='attribute-info' { ...routeProps } />
                        )}
                    />
                    {/* <Route
                        exact
                        path='/category'
                        component={ () => <Category
                            type="css"
                            title={CONSTANTS.tagTypes.title}
                            types={CONSTANTS.tagTypes.types} /> }
                    /> */}
                    <Route
                        path='*'
                        component={ NotFound }
                    />
                </Switch>
            </main>

            {/* TODO: Временно выключил /> */}
            {/* <Sidebar type="main" /> */}
            <Footer />
        </div>
    );
};
