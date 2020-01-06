import React, { ReactNode } from 'react';
import classNames from 'classnames';

import globalStyles from 'Src/client/global.module.scss';

import styles from './page-container.module.scss';

type Props = {
    children: ReactNode;
    paddingsOnPhone?: boolean;
}

export function PageContainer(props: Props): any {
  const { paddingsOnPhone, children } = props;

  const paddings = paddingsOnPhone ? styles.paddingsOnPhone : null;

  return (
    <div className={classNames(styles.pageContainer, paddings, globalStyles.verticalNeighbors)}>
      { children }
    </div>
  );
}
