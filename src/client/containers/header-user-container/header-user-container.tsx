import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { HeaderAuthButton } from 'Components/header-auth-button';
import { selectAuthInfo } from  'Src/selectors/select-auth-info';
import loginIcon from 'Assets/icons/info-icons/user-icon.svg'
import { Button } from 'Components/button';

import styles from './header-user-container.module.scss';
import { Icon } from 'Components/icons/icons';
import { MatchMedia } from 'Components/math-media';
import { BREAKPOINTS } from 'Constants/media';

type Props = {
    authInfo: any;
}

function Container(props: Props) {
    const { isAuthenticated, username = '' } = props.authInfo;

    if (isAuthenticated) {
        return (
            <HeaderAuthButton text={ username } />
        );
    } else if (isAuthenticated === false) {
        return (
            <div className={ styles.container }>
                <Link to="/auth" className={ styles.link }>
                    <MatchMedia maxWidth={`<${BREAKPOINTS.TABLET_2}`}>
                        <Icon size="xl" src={ loginIcon } className={ styles.loginIcon }/>
                    </MatchMedia>
                    Войти
                </Link>
                <Button
                    text="Зарегистрироваться"
                    viewType="secondary"
                    href="/registration"
                    className={ styles.buttonLink }
                />
            </div>

        )
    }

    return null;
}

const mapStateToProps = (state) => {
    return {
        authInfo: selectAuthInfo(state)
    }
}

export const HeaderUserContainer = connect(mapStateToProps)(Container)
