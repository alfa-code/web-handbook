import React from 'react';

import styles from './loading.module.scss';

export const Loading = () => {
    return (
        <div className={ styles.loading }>
            Загрузка...
        </div>
    );
}
