import React from 'react';

import AvatarExample from 'Assets/images/other/avatar-example.png';

import { Props } from './props';

import styles from './avatar.module.scss';

export const Avatar = ({ src = AvatarExample }: Props): JSX.Element => {
    return (
        <div className={styles.container}>
            <img src={src} alt={'Avatar'}/>
        </div>
    );
};
