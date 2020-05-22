import React, { ReactNode } from 'react';

import { Avatar } from 'Components/avatar';

import { Props } from './props';

import styles from './user-info-block.module.scss';

export class UserInfoBlock extends React.PureComponent<Props> {
    render(): ReactNode {
        const { header } = this.props;

        return (
            <div className={styles.root}>
                <div className={styles.avatar}>
                    <Avatar />
                </div>
                <div className={styles.body}>
                    <div className={styles.header}>
                        { header }
                    </div>
                    <div className={styles.info}>
                        Some information
                    </div>
                </div>
            </div>
        );
    }
}
