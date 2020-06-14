import React, { Component } from 'react';

import styles from './grid.module.scss';

interface Props {
    children: any;
    className?: string;
}

export class Grid extends Component<Props> {
  render() {
    const { children, className } = this.props;

    return (
      <section className={ `${styles.grid} ${className}` }>
        { children }
      </section>
    );
  }
}
