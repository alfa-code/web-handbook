import React, { Component, ReactNode } from 'react';

import classNames from 'classnames';

import globalStyles from 'Src/client/global.module.scss';
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
    type?: 'button' | any;
    mode?: 'normal' | 'loading' | 'disabled'
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

    renderButtonContent = () => {
        const {
            text,
            children,
            mode = 'normal'
        } = this.props;

        const isLoading = mode === 'loading';

        if (isLoading) {
            return null;
        }

        return (
            <>
                {this.renderIcon()}
                {text || children}
            </>
        )
    }

    render(): ReactNode {
        const {
            text,
            children,
            href,
            onClick,
            className = '',
            type = 'button',
            mode = 'normal'
        } = this.props;

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

        const isLoading = mode === 'loading';
        const isDisabled = mode === 'disabled';

        return (
            <button
                type={ type }
                className={
                    classNames(styles.button, className, this.getButtonClassNames(), {
                        [styles.button]: true,
                        [globalStyles.spinner]: isLoading,
                    })
                }
                onClick={ onClick }
                disabled={ isLoading || isDisabled }
            >
                { this.renderButtonContent() }
            </button>
        );
    }
}
