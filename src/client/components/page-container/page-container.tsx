import React, { ReactNode } from 'react';
import classNames from 'classnames';

import globalStyles from 'Src/client/global.module.scss';

import styles from './page-container.module.scss';

type Props = {
    children: ReactNode;
    paddingsOnPhone?: boolean;
    darkMode?: boolean;
}

export function PageContainer(props: Props): any {
  const { paddingsOnPhone, darkMode, children } = props;

  const paddings = paddingsOnPhone ? styles.paddingsOnPhone : null;
  const dark = darkMode ? 'dark-mode' : null

    let content = (
        <div className={classNames(styles.pageContainer, paddings, globalStyles.verticalNeighbors)}>
            { children }
        </div>
    )
    if (dark) {
        content = (
            <div className={dark}>
                {content}
            </div>
        )
    }

  return (
      {...content}
  );
}
