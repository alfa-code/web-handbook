import React, { Component } from 'react';
import { connect } from 'react-redux';

import { UserSettingsPage } from 'Pages/user-settings-page';

import { selectUserParams } from 'Selectors/user-params';

import { Props } from './props';

class Container extends Component<Props> {
    render() {
        const { userParams } = this.props;

        return (
            <UserSettingsPage userParams={ userParams } />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userParams: selectUserParams(state),
    }
}

const mapDispatchToProps = {
}

export const UserSettingsPageContainer = connect(mapStateToProps, mapDispatchToProps)(Container)
