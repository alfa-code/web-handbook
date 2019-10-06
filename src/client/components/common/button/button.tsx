import React, { PureComponent, ReactNode } from 'react';

import styles from './button-style.pcss';

type Props = {
    text: string,
    className?: string,
    icon?: string
}

export class Button extends PureComponent<Props> {
    renderIcon = () => {
        const { icon } = this.props;

        if (!icon) {
            return null;
        }

        return (
            <img
                src={ icon }
                alt='Иконка на кнопке'
                className={ styles.buttonIcon }
            />
        );
    }

    render(): ReactNode {
        const { text } = this.props;

        return (
            <button
                type='button'
                className={
                    `${styles.button}
                    ${styles.buttonSecondary}
                    ${this.props.className ? this.props.className : ''}`
                }
            >
                { this.renderIcon() }
                { text }
            </button>
        );
    }
}
