import React from 'react';

import JsxParser from 'react-jsx-parser';
import { Link } from 'react-router-dom';

export const JsxParserWrapper = ({ content, children }: { content?: string, children?: string }) => {
    const components = {
        Link
    }

    const stringTojsx = children || content;

    return (
        <JsxParser
            components={ components }
            jsx={ stringTojsx }
        />
    )
}
