import React, { PureComponent } from 'react';

import { PostgreForm } from 'Src/client/forms/postgre-form';

import styles from './postgre-panel.module.scss';

interface Props {}
interface State {}

export class PostgrePanel extends PureComponent<Props, State> {
    render(): any {
        return (
            <div className={ styles.container }>
                <PostgreForm />
            </div>
        );
    }
}


