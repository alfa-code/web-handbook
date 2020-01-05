import React, { PureComponent, ReactNode } from 'react';

import styles from './button-style.module.scss';

import { Link } from 'react-router-dom';

type Props = {
    text?: string;
    viewType?: 'primary' | 'secondary';
    className?: string;
    icon?: string;
    children?: any;
    href?: string;
}

export class Button extends PureComponent<Props> {
    renderIcon = () => {
        const { icon } = this.props;

        if (!icon) {
            return null;
        }

        return (
            <img
                src={icon}
                alt="Иконка на кнопке"
                className={styles.buttonIcon}
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
        const { text, children, href } = this.props;

        if (href) {

            const linkContent = (
                <>
                    {this.renderIcon()}
                    {text || children}
                </>
            )

            return (
                <Link
                    to={href}
                    className={
                        `${styles.button}
                    ${this.getButtonClassNames()}
                    ${this.props.className ? this.props.className : ''}`
                    }
                >
                    {linkContent}
                </Link>
            );
        }

        return (
            <button
                type="button"
                className={
                    `${styles.button}
            ${this.getButtonClassNames()}
            ${this.props.className ? this.props.className : ''}`
                }
            >
                {this.renderIcon()}
                {text || children}
            </button>
        );
    }
}
