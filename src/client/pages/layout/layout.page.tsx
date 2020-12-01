import React from 'react';

import { Footer } from 'Blocks/index';
import { HeaderContainer } from 'Containers/index';
// import { Sidebar } from 'Blocks/index';

import { NavigationContainer } from 'Containers/navigation-container';

import { Props } from './props';

export const Layout = (props: Props) => {
    const { children } = props;
    return (
        <div className="layout">
            <HeaderContainer />
            <NavigationContainer />
            <div className="content">{children}</div>
            {/* <Sidebar type="main" /> */}
            <Footer />
        </div>
    );
};
