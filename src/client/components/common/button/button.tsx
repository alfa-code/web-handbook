import React, { PureComponent, ReactNode } from 'react'

type Props = {
    text: string,
    className?: string,
    icon?: string
}

import styles from './button-style.pcss';

export class Button extends PureComponent<Props> {
    renderIcon = () => {
        const { icon } = this.props;

        if (!icon) return null;

        return (
            <img
                src={ icon }
                alt="Иконка на кнопке"
                className={ styles.buttonIcon }
            />
        )
    }

    render(): ReactNode {
        return (
            <button
                className={
                    `${styles.button}
                    ${styles.buttonSecondary}
                    ${this.props.className ? this.props.className : ''}`
                }
            >
                { this.renderIcon() }
                { this.props.text }
            </button>
        )
    }
}

