import React, { ReactNode } from 'react';

import styles from './form-body.module.scss';

type Props = {
    children: ReactNode;
}

export const FormBody = ({ children }: Props): JSX.Element => {
    return (
        <div className={styles.content}>
            { children }
        </div>
    );
};
