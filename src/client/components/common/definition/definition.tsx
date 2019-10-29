import React, { Component } from 'react';
import classNames from 'classnames';

import { Heading } from 'Components/common/heading';
import { Paragraph } from 'Components/common/paragraph';

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
                    <span className={ classNames(styles.upTitle, uptitleClassName) }>
                        { upTitle }
                    </span>
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
