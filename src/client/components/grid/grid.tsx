import React, { Component } from 'react';

import styles from './grid.pcss';

interface Props {
    children: any
}

export class Grid extends Component<Props> {
    render() {
        const { children } = this.props;

        return (
            <section className={ styles.grid }>
                { children }
            </section>
        );
    }
}