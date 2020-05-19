import React from 'react';

import { Props } from './props';

import styles from './progress-bar.module.scss';

const ProgressBar = (props: Props): JSX.Element => {
    const { percent } = props;

    return (
        <div className={ styles.container }>
            <div className={ styles.bar } style={{width: `${percent}%`}}/>
        </div>
    );
};

export default ProgressBar;
