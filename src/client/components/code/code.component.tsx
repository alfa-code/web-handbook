import React from 'react';
import Refractor from 'react-refractor'

import { markup } from './languages/markup';

import { Props } from './props';

Refractor.registerLanguage(markup)


export const Code = ({ children }: Props) => {
    const string = children[1];
    return (
        <Refractor language="js" value={ string } />
    );
};
