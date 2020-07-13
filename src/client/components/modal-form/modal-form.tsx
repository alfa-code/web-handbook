import React, { StatelessComponent } from 'react';

import styles from './modal-form.module.scss';

type Props = {
    children?: React.ReactNode;
    className?: string;
}

export const ModalForm: StatelessComponent<Props> = (props: Props) => {
    const { children = {}, className } = props;

    return (
        <div className={ `${styles.modalForm} ${className}` }>
            { children }
        </div>
    );
};
