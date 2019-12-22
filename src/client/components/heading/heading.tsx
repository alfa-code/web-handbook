import React, { PureComponent, ReactNode } from 'react';
import classNames from 'classnames';

import styles from './heading.module.scss';

interface Props {
    size: number;
    children: any;
    className?: string;
}

export class Heading extends PureComponent<Props> {
  render(): ReactNode {
    const { size, children, className } = this.props;

    switch (size) {
      case 1:
        return (
          <h1 className={classNames(styles.h1, className)}>{ children }</h1>
        );
      case 2:
        return (
          <h2 className={classNames(styles.h2, className)}>{ children }</h2>
        );
      case 3:
        return (
          <h3 className={classNames(styles.h3, className)}>{ children }</h3>
        );
      case 4:
        return (
          <h4 className={classNames(styles.h4, className)}>{ children }</h4>
        );
      case 5:
        return (
          <h5 className={classNames(styles.h5, className)}>{ children }</h5>
        );
      case 6:
        return (
          <h6 className={classNames(styles.h6, className)}>{ children }</h6>
        );
      default:
        return (
          <h1 className={className}>{ children }</h1>
        );
    }
  }
}
