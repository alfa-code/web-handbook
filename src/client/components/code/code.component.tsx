import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

import { Props } from './props';

export const Code = ({ children }: Props) => {
    console.log('children', children)
    const string = children[1];
    return (
        <SyntaxHighlighter language="html" style={docco}>
            { string }
        </SyntaxHighlighter>
    );
};
