import React, { PureComponent, ReactNode } from 'react';

import logoImage from 'Assets/icons/logo/logo.svg';

import styles from './logo-style.module.scss';

interface Props {}
interface State {}

export class Logo extends PureComponent<Props, State> {
  render(): ReactNode {
    return (
      <img
        src={logoImage}
        alt='Логотип "Альфа Код"'
        className={styles.logo}
      />
    );
  }
}
