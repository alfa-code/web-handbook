import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'

import defaultUserIcon from 'Assets/icons/other/default-user-icon.svg';
import { BREAKPOINTS } from 'Constants/media';
import { MOBILE_AUTH_BLOCK_COLOR } from 'Constants/colors';
import { media } from 'Utils/media/media';

import styles from './header-auth-button.module.scss';

type Props = {
    text: string;
    className?: string;
}

export const HeaderAuthButton: React.FC<Props> = (props: Props) => {
    const { text, className } = props;
    const [containerBgColor, setContainerBgColor] = useState(null);
    let bgcolor = media(`>${BREAKPOINTS.TABLET_2}`)
        ? useSelector(state => state.UI.pageStyles.backgroundColor)
        : MOBILE_AUTH_BLOCK_COLOR;

    if (!bgcolor) {
        bgcolor = '#fff';
    }

    const updateContainerStyles = (color) => {
        setContainerBgColor(color)
    }

    return (
        <div className={ `${ styles.container } ${ className }` }
             onMouseEnter={ () => updateContainerStyles(bgcolor) }
             onMouseLeave={ () => updateContainerStyles(null) }>
            <div style={{backgroundColor: containerBgColor}}
                 className={ styles.innerContainer }>
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
