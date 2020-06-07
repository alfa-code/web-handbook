import React, { ReactNode } from 'react';

import ValidIcon from 'Assets/icons/info-icons/check-green.svg';
import NotValidIcon from 'Assets/icons/info-icons/cross.svg';

import { Props } from './props';

import styles from './valid-list-item.module.scss';

export class ValidListItem extends React.PureComponent<Props> {
    render(): ReactNode {
        const { children, isValid } = this.props;

        return (
            <div className={styles.body}>
                <div className={styles.icon}>
                    <img src={isValid ? ValidIcon : NotValidIcon} alt='valid-icon'/>
                </div>
                <div className={styles.desc}>
                    { children }
                </div>
            </div>
        );
    }
}
