import React, { PureComponent, ReactNode } from 'react';

import styles from './button-style.pcss';

type Props = {
    text?: string,
    viewType?: string;
    className?: string,
    icon?: string,
    children?: any
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

    getButtonClassNames = () => {
        const { viewType } = this.props;

        switch (viewType) {
            case 'primary':
                return styles.buttonPrimary;
            case 'secondary':
                return styles.buttonSecondary;
            default:
                return styles.buttonSecondary;
        }
    }

    render(): ReactNode {
        const { text, children } = this.props;

        return (
            <button
                type='button'
                className={
                    `${styles.button}
                    ${this.getButtonClassNames()}
                    ${this.props.className ? this.props.className : ''}`
                }
            >
                { this.renderIcon() }
                { text || children }
            </button>
        );
    }
}
