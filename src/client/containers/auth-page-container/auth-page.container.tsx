import React, { Component } from 'react';
import { connect } from 'react-redux';

import { AuthPage } from 'Src/client/pages/auth-page';

import { selectAppLoadingStatus } from 'Selectors/ui/select-app-loading-status';

import {
    registrationActions,
    authActions
} from 'Actions/request-actions';

import { Props } from './props';

class Container extends Component<Props> {
    render() {
        const {
            mode,
            isLoading,
            registrationStartDA,
            authStartDA
        } = this.props;

        return (
            <AuthPage
                mode={ mode }
                isLoading={ isLoading }
                registrationStartDA={ registrationStartDA }
                authStartDA={ authStartDA }
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoading: selectAppLoadingStatus(state)
    }
}

const mapDispatchToProps = {
    registrationStartDA: registrationActions.request,
    authStartDA: authActions.request
}

export const AuthPageContainer = connect(mapStateToProps, mapDispatchToProps)(Container)
