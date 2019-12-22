import React, { ReactNode } from 'react';
import classNames from 'classnames';

import globalStyles from 'Src/client/global.module.scss';

import styles from './page-container.module.scss';

type Props = {
    children: ReactNode;
}

export function PageContainer(props: Props) {
  const { children } = props;

  return (
    <div className={classNames(styles.pageContainer, globalStyles.verticalNeighbors)}>
      { children }
    </div>
  );
}
