import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import defaultUserIcon from 'Assets/icons/other/default-user-icon.svg';

import styles from './header-auth-button.module.scss';

type Props = {
    text: string;
    className?: string;
}

export const HeaderAuthButton: React.FC<Props> = (props: Props) => {
    const { text, className } = props;

    return (
        <div className={ classNames(
            `${ styles.container } ${ className }`, 'inner-header-container') }>
            <div className={ styles.innerContainer }>
                <div className={ styles.visiblePart }>
                    <div className={ styles.icon }>
                        <img src={ defaultUserIcon } alt="Пользователь" />
                    </div>
                    <span className={ styles.text }>
                        { text }
                    </span>
                </div>
                <ul className={ styles.hiddenPart }>
                    <li>
                        <Link to='/profile'>
                            Настройки
                        </Link>
                    </li>
                    <li>
                        <a href='/logout'>
                            Выйти
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
