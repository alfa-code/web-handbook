import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Navigation } from 'Blocks/index';

import { selectHtmlTagsFlatList } from 'Selectors/index'

import { Props } from './props';

// import styles from './navigation.module.scss';

class Container extends Component<Props> {
    render() {
        return (
            <Navigation
                tags={ this.props.tags }
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
}

export const NavigationContainer = connect(mapStateToProps, mapDispatchToProps)(Container);
