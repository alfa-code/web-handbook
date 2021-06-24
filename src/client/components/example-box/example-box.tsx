import React from 'react';

import styles from './example-box.module.scss';

export const ExampleBox = ({ children, label = 'Пример' }) => {
    return (
        <div className={ styles.exampleBox }>
            { children }
            <span className={ styles.label }>
                { label }
            </span>
        </div>
    );
}
