import React, { ReactNode } from 'react';
import classNames from 'classnames';

import globalStyles from 'Src/client/global.module.scss';

import styles from './page-container.module.scss';

type Props = {
    children: ReactNode;
    paddingsOnPhone?: boolean;
    darkMode?: boolean;
    bgcolor?: string;
}

export function PageContainer(props: Props): any {
  const { paddingsOnPhone, darkMode, bgcolor, children } = props;

  const paddings = paddingsOnPhone ? styles.paddingsOnPhone : null;
  const colorMode = bgcolor ? true : null;
  const dark = darkMode ? styles.dark : null;

    let content = (
        <div className={classNames(styles.pageContainer, paddings, globalStyles.verticalNeighbors)}>
            { children }
        </div>
    )
    if (colorMode) {
        content = (
            <div className={dark} style={bgcolor ? {backgroundColor: bgcolor} : null}>
                {content}
            </div>
        )
    }

  return (
      {...content}
  );
}
