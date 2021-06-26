import React from 'react';
import Refractor from 'react-refractor';

import { ErrorBoundary } from 'Components/error-boundary';

import { markup } from './languages/markup';

import { Props } from './props';

Refractor.registerLanguage(markup)


export const Code = (props: Props) => {
    return (
        <ErrorBoundary>
            <CodeHighlighter { ...props } />
        </ErrorBoundary>
    );
};

const CodeHighlighter = ({ children }: Props) => {
    throw new Error('test')
    const string = children[1];
    return (
        <Refractor language="js" value={ string } />
    );
};


