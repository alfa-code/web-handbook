import React, { Component } from 'react';
import classNames from 'classnames';

import { Heading } from 'Components/heading';
import { Paragraph } from 'Components/paragraph';

import styles from './card.pcss';

interface Props {
    image?: string;
    header?: string;
    text?: string;
    color?: string;
    firstCustomSection?: any;
    secondCustomSection?: any;
}

export class Card extends Component<Props> {
    renderCusomSection = (section: any) => {
        if (!section) {
            return null;
        }

        return section;
    }

    render() {
        const {
            image,
            text,
            header,
            color,
            firstCustomSection,
            secondCustomSection
        } = this.props;

        return (
            <div className={ styles.card }>
                <div className={ classNames(styles.header, styles[color]) }>
                    <img
                        src={ image }
                        alt={ header }
                        className={ styles.image }
                    />
                </div>
                <div className={ styles.body }>
                    <div>
                        { this.renderCusomSection(firstCustomSection) }
                        <Heading size={ 4 } className={ styles.heading }>
                            { header }
                        </Heading>
                        <Paragraph className={ styles.text }>
                            { text }
                        </Paragraph>
                    </div>
                    { this.renderCusomSection(secondCustomSection) }
                </div>
            </div>
        );
    }
}

