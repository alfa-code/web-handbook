import React, { Component } from 'react';
import { connect } from 'react-redux';

import { userParamsGet } from 'Actions/request-actions';
import { CabinetPage } from 'Pages/cabinet-page';
import { selectUserParams } from 'Selectors/user-params';

import { Props } from './props';

class Container extends Component<Props> {
    componentDidMount() {
        const { userParamsGetDA } = this.props;
        userParamsGetDA();
    }
    render() {
        const { userParams } = this.props;
        return (
            <CabinetPage
                userParams={ userParams }
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userParams: selectUserParams(state)
    }
}

const mapDispatchToProps = {
    userParamsGetDA: userParamsGet.request
}

export const CabinetPageContainer = connect(mapStateToProps, mapDispatchToProps)(Container)
