import React, { Component } from 'react';

import Image from 'Src/assets/images/in-work.jpg';

import { Props } from './props';

import styles from './work-in-progress.module.scss';

export class WorkInProgress extends Component<Props> {
    render() {
        return (
            <div className={styles.box} >
                <p>
                    Контент в данный момент находится в разработке.
                </p>
                <img
                    src={ Image } alt="in work"
                    width={ 300 }
                    height={ 300 }
                />
            </div>
        );
    }
}
