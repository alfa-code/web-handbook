import React, { ReactNode } from 'react';

import styles from './profile-form.module.scss';

type Props = {
    children: ReactNode;
}

export const ProfileForm = ({ children }: Props): JSX.Element => {
    return (
        <div className={styles.content}>
            { children }
        </div>
    );
};
