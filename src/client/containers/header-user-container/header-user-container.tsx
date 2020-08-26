import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { HeaderAuthButton } from 'Components/header-auth-button';
import { selectAuthInfo } from  'Src/selectors/select-auth-info';
import loginIcon from 'Assets/icons/info-icons/user-icon.svg';
import { Button } from 'Components/button';
import { changeHeaderMenuVisabilityAC } from 'Actions/ui/header-actions';
import { selectHeaderMenuOpened } from 'Selectors/ui/header.selector';

import { Icon } from 'Components/icons/icons';
import { MatchMedia } from 'Components/math-media';
import { BREAKPOINTS } from 'Constants/media';

import styles from './header-user-container.module.scss';

type Props = {
    authInfo: any;

    changeHeaderMenuVisabilityDA: any;
    menuOpened: boolean;
}

function Container(props: Props) {
    const { isAuthenticated, username = '' } = props.authInfo;
    const { changeHeaderMenuVisabilityDA, menuOpened } = props;

    if (isAuthenticated) {
        return (
            <HeaderAuthButton
                text={ username }
                menuOpened={ menuOpened }
                changeHeaderMenuVisabilityDA={ changeHeaderMenuVisabilityDA }
            />
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

const mapDispatchToProps = {
    changeHeaderMenuVisabilityDA: changeHeaderMenuVisabilityAC
}

const mapStateToProps = (state) => {
    return {
        authInfo: selectAuthInfo(state),
        menuOpened: selectHeaderMenuOpened(state)
    }
}

export const HeaderUserContainer = connect(mapStateToProps, mapDispatchToProps)(Container)
