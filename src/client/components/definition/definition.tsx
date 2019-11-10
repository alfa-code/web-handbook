import React, { Component } from 'react';
import classNames from 'classnames';

import { Heading } from 'Src/client/components/heading';
import { Paragraph } from 'Src/client/components/paragraph';
import { HeaderLabel } from 'Src/client/components/header-label';

import styles from './definition.pcss';

type Position = 'left' | 'center' | 'right';

interface Props {
    title: string;
    titleSize: number;
    upTitle?: string;
    text?: string;
    position: Position;
    containerClassName?: string;
    uptitleClassName?: string;
    headingClassName?: string;
    paragraphClassName?: string;
}

export class Definition extends Component<Props> {
    render() {
        const {
            title,
            titleSize = 1,
            text,
            upTitle,
            position = 'left',
            containerClassName,
            uptitleClassName,
            headingClassName,
            paragraphClassName
        } = this.props;

        return (
            <div className={ classNames(styles.definition, styles[position], containerClassName) }>
                { upTitle && (
                    <HeaderLabel className={ uptitleClassName }>
                        { upTitle }
                    </HeaderLabel>
                ) }
                <Heading size={ titleSize } className={ headingClassName }>
                    { title }
                </Heading>
                { text && (
                    <Paragraph className={ classNames(styles.paragraph, paragraphClassName) }>
                        { text }
                    </Paragraph>
                ) }
            </div>
        );
    }
}

export default Definition;
