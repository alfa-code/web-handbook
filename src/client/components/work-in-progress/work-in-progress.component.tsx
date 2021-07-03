import React, { Component } from 'react';

import { Props } from './props';

import styles from './work-in-progress.module.scss';

export class WorkInProgress extends Component<Props> {
    render() {
        return (
            <div className={styles.box} >
                Контент в данный момент находится в разработке.
            </div>
        );
    }
}
