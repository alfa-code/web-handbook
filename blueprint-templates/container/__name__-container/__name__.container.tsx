import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Props } from './props';

class Container extends Component<Props> {
    render() {
        return (
            <div />
        );
    }
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = {
}

export const {{pascalCase name}}Container = connect(mapStateToProps, mapDispatchToProps)(Container)
