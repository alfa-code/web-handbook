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
}

export class Definition extends Component<Props> {
    render() {
        const {
            title,
            titleSize = 1,
            text,
            upTitle,
            position = 'left',
        } = this.props;

        return (
            <div className={ classNames(styles.definition, styles[position]) }>
                { upTitle && <span className={ styles.upTitle }>{ upTitle }</span> }
                <Heading size={ titleSize }>{ title }</Heading>
                { text && (
                    <Paragraph className={ styles.paragraph }>{ text }</Paragraph>
                ) }
            </div>
        );
    }
}

export default Definition;
