import React from 'react';

import { ValidListItem } from 'Components/valid-list-item/valid-list-item';

import { Props } from './props';

import styles from './valid-list.module.scss';

export const ValidList = (props: Props): JSX.Element => {
    const { list, errors } = props;

    return (
        <div className={styles.container}>
            {
                list.map(listItem => {
                    const hasItemAtErrors = Boolean(
                        errors.find(
                        error => error.code === listItem.code
                        )
                    );

                    return (
                        <ValidListItem key={listItem.code} isValid={ !hasItemAtErrors }>
                            { listItem.message }
                        </ValidListItem>
                    )
                })
            }
        </div>
    );
};
