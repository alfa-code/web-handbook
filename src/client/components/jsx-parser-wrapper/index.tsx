import React from 'react';

import JsxParser from 'react-jsx-parser';
import { Link } from 'react-router-dom';

import { NoteBox } from 'Components/note-box';
import { ExampleBox } from 'Components/example-box';
import { LinkElement } from 'Components/link-wrapper/link-element';

export const JsxParserWrapper = ({ content, children }: { content?: string, children?: string }) => {
    const components = {
        Link,
        NoteBox,
        ExampleBox,
        LinkElement
    }

    const stringTojsx = children || content;

    return (
        <JsxParser
            components={ components }
            jsx={ stringTojsx }
        />
    )
}
