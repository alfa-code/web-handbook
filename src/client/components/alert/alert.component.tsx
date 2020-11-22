import React from 'react';

import { Props } from './props';

import { Icon } from 'Components/index';

import styles from './alert.module.scss';

export const Alert = ({ message } : Props) => {
    return (
        <div className={ styles.alert }>
            <div className={ styles.alertIcon }>
                <Icon size="24" icon="alert-icon" />
            </div>
            <div className="text-body-2">
                {message}
            </div>
        </div>
    );
}
