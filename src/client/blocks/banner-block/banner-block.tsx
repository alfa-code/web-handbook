import React, { Component, ReactNode } from 'react';
import classNames from 'classnames';

import { Definition } from 'Components/definition';

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

    render(): ReactNode {
        const { imageUrl, children } = this.props;

        const { undertitle, text, title } = this.props;

        return (
            <div className={ classNames(styles.block, this.getDirectionClassName(), globalStyles.verticalNeighbors) }>
                <div className={ styles.contentBlock }>
                    <Definition
                        upTitle={ undertitle }
                        title={ title }
                        titleSize={ 2 }
                        text={ text }
                        position='left'
                        uptitleClassName={ styles.subtitle }
                        paragraphClassName={ styles.text }
                    />
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

