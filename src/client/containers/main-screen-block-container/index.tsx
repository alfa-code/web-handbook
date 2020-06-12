import React from 'react';
import { connect } from 'react-redux';

import { selectAuthInfo } from  'Src/selectors/select-auth-info';
import { MainScreenBlock } from 'Src/client/blocks/main-screen-block';


type Props = {
    authInfo: any;
}

function Container(props: Props) {
    const { isAuthenticated } = props.authInfo;

    return (
        <MainScreenBlock isAuthenticated={ isAuthenticated }/>
    )
}

const mapStateToProps = (state) => {
    return {
        authInfo: selectAuthInfo(state)
    }
}

export const MainScreenBlockContainer = connect(mapStateToProps)(Container)
