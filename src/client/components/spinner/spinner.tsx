import React, { FunctionComponent } from 'react';

import styles from './spinner.module.scss'

export const Spinner: FunctionComponent = () => {
    return (
        <>
            <div
                className={ styles.spinner }
            >
                <div className={ styles.dot }></div>
                <div className={ styles.dot }></div>
                <div className={ styles.dot }></div>
                <div className={ styles.dot }></div>
                <div className={ styles.dot }></div>
                <div className={ styles.dot }></div>
                <div className={ styles.dot }></div>
            </div>
            <svg>
                <defs>
                    <filter id='goo'>
                        <feGaussianBlur in='SourceGraphic' stdDeviation='8' result='blur' />
                        <feColorMatrix in='blur' mode='matrix' values='
                            1 0 0 0 0
                            0 1 0 0 0
                            0 0 1 0 0
                            0 0 0 25 -8' result='goo' />
                        <feBlend in='SourceGraphic' in2='goo' />
                    </filter>
                </defs>
            </svg>
        </>
    );
};
