import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Props } from './props';

import { Header } from 'Blocks/index';

import { selectMobileMenuState } from 'Selectors/index';
import { toggleMobileMenuStateAC } from 'Actions/index';

// import styles from './header.module.scss';

class Container extends Component<Props> {
    render() {
        const {
            isMobileMenuOpened,
            toggleMobileMenuStateAD
        } = this.props;

        return (
            <Header
                isMobileMenuOpened={ isMobileMenuOpened }
                toggleMobileMenuStateAD={ toggleMobileMenuStateAD }
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isMobileMenuOpened: selectMobileMenuState(state)
    }
}

const mapDispatchToProps = {
    toggleMobileMenuStateAD: toggleMobileMenuStateAC
}

export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Container);
