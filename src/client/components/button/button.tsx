import React, { Component, ReactNode } from 'react';

import styles from './button-style.module.scss';

import { Link } from 'react-router-dom';

type Props = {
    text?: string;
    viewType?: 'primary' | 'secondary';
    className?: string;
    icon?: string;
    children?: any;
    href?: string;
    onClick?: any;
    type?: any;
}

export class Button extends Component<Props> {
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
        const { text, children, href, onClick, className = '', type = 'button' } = this.props;

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
                        ${className}`
                    }
                >
                    {linkContent}
                </Link>
            );
        }

        return (
            <button
                type={ type }
                className={
                    `${styles.button}
                    ${this.getButtonClassNames()}
                    ${className}`
                }
                onClick={ onClick }
            >
                {this.renderIcon()}
                {text || children}
            </button>
        );
    }
}
