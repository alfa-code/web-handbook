import React, { FunctionComponent } from 'react';

import styles from './spinner.module.scss'
import spinnerIcon from "Assets/icons/info-icons/spinner.svg"

interface SpinnerProps {
    width: number;
}

const Spinner: FunctionComponent<SpinnerProps> = (SpinnerProps) => {

    return (
        <img className={styles.spin} src={spinnerIcon} alt="Loading..." style={{ width: SpinnerProps.width }} />
    )
};

export default Spinner;