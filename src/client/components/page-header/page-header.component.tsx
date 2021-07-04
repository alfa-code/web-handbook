import React, { Component } from 'react';

import { Props } from './props';

import styles from './page-header.module.scss';

export class PageHeader extends Component<Props> {
    render() {
        return (
            <h1
                className={ styles.header }
                tabIndex={ 0 }
            >
                { this.props.children }
            </h1>
        );
    }
}
