import React from 'react';

import { Switch, Route } from 'react-router-dom';

import { Footer } from 'Blocks/index';
import { HeaderContainer } from 'Containers/index';

// TODO: Временно выключено
// import { Sidebar } from 'Blocks/index';

import { NavigationContainer } from 'Containers/navigation-container';

import loadable from '@loadable/component';

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

// const LoadableComponent = loadable(() => import("Pages/elements-list/elements-list.page"), {
//     fallback: <div>загрузка</div>
// });

// const LoadableComponent = loadable(() => import("Pages/elements-list/elements-list.page"));
// const LoadableComponent = loadable(() => import(/* webpackChunkName: "test" */ "Components/test/test.component"));
const LoadableComponent = loadable(() => import("Components/test/test.component"));

export const Layout = () => {
    return (<LoadableComponent />);
};
