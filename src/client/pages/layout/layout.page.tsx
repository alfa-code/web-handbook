import React, { useState } from 'react';

import { Header, Navigation, Footer } from 'Blocks/index';

import { Props } from './props';

export const Layout = (props: Props) => {
    const { children } = props;
    return (
        <div className="layout">
            <Header />
            <Navigation />
            <div className="content">
                { children }
            </div>
            <Footer />
        </div>
    );
}
