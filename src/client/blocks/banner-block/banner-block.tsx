import React, { Component, ReactNode } from 'react';
import classNames from 'classnames';

import { Heading } from 'Components/common/heading';

import globalStyles from 'Src/client/global.pcss';

import styles from './banner-block.pcss';

interface Props {
    imageUrl?: string;
    direction?: 'right' | 'left';
    undertitle?: string;
    title?: string;
    text?: string;
}
interface State {}

export class BannerBlock extends Component<Props, State> {
    getDirectionClassName = () => {
        const { direction } = this.props;

        switch (direction) {
            case 'left':
                return styles.leftDirection;
            case 'right':
                return styles.rightDirection;
            default:
                return styles.leftDirection;
        }
    }

    getUnderTitle = () => {
        const { undertitle } = this.props;

        if (!undertitle) {
            return null;
        }

        return (
            <span className={ styles.subtitle }>
                { undertitle }
            </span>
        );
    }

    getTitle = () => {
        const { title } = this.props;

        if (!title) {
            return null;
        }

        return (
            <Heading size={ 2 }>
                { title }
            </Heading>
        );
    }

    getText = () => {
        const { text } = this.props;

        if (!text) {
            return null;
        }

        return (
            <p className={ styles.text }>
                { text }
            </p>
        );
    }

    render(): ReactNode {
        const { imageUrl, children } = this.props;

        return (
            <div className={ classNames(styles.block, this.getDirectionClassName(), globalStyles.verticalNeighbors) }>
                <div className={ styles.contentBlock }>
                    { this.getUnderTitle() }
                    { this.getTitle() }
                    { this.getText() }
                    { children }
                    { imageUrl && (
                        <img
                            src={ imageUrl }
                            className={ styles.image }
                            alt='Иллюстрация'
                        />
                    ) }
                </div>
            </div>
        );
    }
}

