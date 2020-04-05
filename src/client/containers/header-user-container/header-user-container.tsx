import React from 'react';
import { connect } from 'react-redux';

import userIcon from 'Assets/icons/other/user.svg';
import { HeaderAuthButton } from 'Components/header-auth-button';
import { selectAuthInfo } from  'Src/selectors/select-auth-info';
import { Button } from 'Components/button';

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
            <Button
                text="Вход"
                icon={userIcon}
                viewType="secondary"
                href="/auth"
            />
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
