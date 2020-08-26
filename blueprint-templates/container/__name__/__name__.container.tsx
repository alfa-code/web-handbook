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
}

const mapDispatchToProps = {
}

export const {{pascalCase name}} = connect(mapStateToProps, mapDispatchToProps)(Container)
