import React from 'react';

import { Header, Navigation, Sidebar, Footer } from 'Blocks/index';

import { Props } from './props';

export const Layout = (props: Props) => {
    const { children } = props;
    return (
        <div>
            <Header />
                <div className="layout">
                    <Navigation />
                    <div className="content">
                        { children }
                    </div>
                    <Sidebar />
                </div>
            <Footer />
        </div>
    );
}
