import React from 'react';

import JsxParser from 'react-jsx-parser';
import { Link } from 'react-router-dom';

import { NoteBox } from 'Components/note-box';
import { ExampleBox } from 'Components/example-box';
import { LinkElement, LinkAttribute, LE, LA } from 'Components/link-wrapper/link-element';
import { Code } from 'Components/code';

export const JsxParserWrapper = ({ content, children }: { content?: string, children?: string }) => {
    const components = {
        Link,
        NoteBox,
        ExampleBox,
        LinkElement,
        LinkAttribute,
        LE,
        LA,
        Code
    }

    const stringTojsx = children || content;

    return (
        <JsxParser
            components={ components }
            jsx={ stringTojsx }
            onError={ (e) => {
                console.log(e)
            } }
        />
    )
}
