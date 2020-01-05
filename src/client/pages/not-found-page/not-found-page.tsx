import React, { PureComponent } from 'react';

import { Logo } from 'Src/client/components/logo';

import styles from './not-found-page.module.scss';

interface Props { }
interface State { }

export class NotFoundPage extends PureComponent<Props, State> {
    render(): any {
        return (
            <div className={styles.notFoundPage}>
                <Logo />
                <span className={styles.text} >
                    Страница не найдена
                </span>
            </div>
        );
    }
}


