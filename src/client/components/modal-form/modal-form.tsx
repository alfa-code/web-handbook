import React, { StatelessComponent } from 'react';

import styles from './modal-form.module.scss';

type Props = {
    children?: React.ReactNode[];
}

export const ModalForm: StatelessComponent = (props: Props) => {
    const { children = {} } = props;

    return (
        <div className={ styles.modalForm }>
            { children }
        </div>
    );
};
