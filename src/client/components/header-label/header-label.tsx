import React from 'react';

import classNames from 'classnames';

import styles from './header-label.module.scss';

import { Props } from './props';

export function HeaderLabel(props: Props) {
  const { text, children, className } = props;

  return (
    <span className={classNames(styles.label, className)}>
      { text || children }
    </span>
  );
}
