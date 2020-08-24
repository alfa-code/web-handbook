import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Props } from './props';

import styles from './{{name}}.module.scss';

class Container extends Component<Props> {
    render() {
        return (
            <div className={ styles.container } />
        );
    }
}

const mapStateToProps = (state) => {
}

const mapDispatchToProps = {
}

export const {{pascalCase name}} = connect(mapStateToProps, mapDispatchToProps)(Container)
