import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Breadcrumbs } from 'Blocks/index';

import { selectBreadCrumbs } from 'Selectors/index';

import { Props } from './props';

// import styles from './breadcrumbs.module.scss';

class Container extends Component<Props> {
    render() {
        return (
            <Breadcrumbs breadcrumbs={ this.props.breadcrumbs } />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        breadcrumbs: selectBreadCrumbs(state)
    }
}

const mapDispatchToProps = {
}

export const BreadcrumbsContainer = connect(mapStateToProps, mapDispatchToProps)(Container);
