import React, { Component, ReactNode } from 'react';
import { Link } from 'react-router-dom';

import defaultUserIcon from 'Assets/icons/other/default-user-icon.svg';

import styles from './header-auth-button.module.scss';

type Props = {
    text: string;
    className?: string;
    menuOpened: boolean;
    changeHeaderMenuVisabilityDA: any;
    userParams?: any;
}

export class HeaderAuthButton extends Component<Props> {
    componentDidMount() {
        if (typeof window !== undefined) {
            window.document.addEventListener('click', this.catchDocumentClick);
        }
    }

    componentWillUnmount() {
        if (typeof window !== undefined) {
            window.document.removeEventListener('click', this.catchDocumentClick);
        }
    }

    catchDocumentClick = (e) => {
        const { menuOpened, changeHeaderMenuVisabilityDA } = this.props;
        if (menuOpened && !e.target.closest('.header-auth-button')) {
            changeHeaderMenuVisabilityDA(false);
        }
    }

    closeMenu = () => {
        const { changeHeaderMenuVisabilityDA } = this.props;
        changeHeaderMenuVisabilityDA(false);
    }

    render(): ReactNode {
        const {
            text,
            className,
            menuOpened,
            changeHeaderMenuVisabilityDA,
            userParams
        } = this.props;

        const { name, surname, avatar } = userParams;
        const userIcon = avatar ? avatar : defaultUserIcon;
        const userName = (name && surname) ? `${name} ${surname}` : text;

        return (
            <div
                className={ `${ styles.container } ${menuOpened ? styles.opened : ''} ${ className } header-auth-button` }
            >
                <div className={ styles.innerContainer }>
                    <div
                        className={ styles.visiblePart }
                        onClick={ () => { changeHeaderMenuVisabilityDA(!menuOpened) } }
                    >
                        <div className={ styles.icon }>
                            <img
                                src={ userIcon }
                                alt="Пользователь"
                            />
                        </div>
                        <span className={ styles.text }>
                            { userName }
                        </span>
                    </div>
                    <ul className={ styles.hiddenPart }>
                        <li>
                            <Link
                                to='/profile'
                                className={ styles.settingsLink }
                                onClick={ this.closeMenu }
                            >
                                Настройки
                            </Link>
                        </li>
                        <li>
                            <a href='/logout' className={ styles.exitLink }>
                                Выйти
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
