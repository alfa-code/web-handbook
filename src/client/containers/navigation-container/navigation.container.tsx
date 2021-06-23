import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Navigation } from 'Blocks/index';

import { selectHtmlTagsFlatList } from 'Selectors/index';
import { toggleMobileMenuAC } from 'Actions/index';

import { Props } from './props';

// import styles from './navigation.module.scss';

class Container extends Component<Props> {
    render() {
        const { toggleMobileMenuStateAD, tags } = this.props;

        return (
            <Navigation
                tags={ tags }
                closeMobileMenuCallback={ () => {
                    toggleMobileMenuStateAD(false);
                } }
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tags: selectHtmlTagsFlatList(state)
    }
}

const mapDispatchToProps = {
    toggleMobileMenuStateAD: toggleMobileMenuAC
}

export const NavigationContainer = connect(mapStateToProps, mapDispatchToProps)(Container);
