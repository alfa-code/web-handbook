import React, { PureComponent, ReactNode } from 'react';

import styles from './header-navigation.module.scss';

interface Props {}
interface State {}

export class HeaderNavigation extends PureComponent<Props, State> {
  render(): ReactNode {
    return (
      <nav className={styles.headerNavigation}>
        <ul>
          <li>
                        Курсы
          </li>
          <li>
                        Блог
          </li>
          <li>
                        Html справочник
          </li>
          <li>
                        О нас
          </li>
        </ul>
      </nav>
    );
  }
}
