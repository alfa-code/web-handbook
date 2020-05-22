import React, { ReactNode } from 'react';
import { Heading } from 'Components/heading';
import { InputSimple } from 'Components/input-simple';

import styles from './user-data-form-block.module.scss';
import { Button } from 'Components/button';

export class UserDataFormBlock extends React.PureComponent {
    render(): ReactNode {
        return (
            <React.Fragment>
                <div className={styles.content}>
                    <Heading size={6}>Редактировать данные</Heading>
                    <div className={styles.body}>
                        <InputSimple className={styles.input} name='name' placeholder='Имя' size='full'/>
                        <InputSimple className={styles.input} name='surname' placeholder='Фамилия' size='full'/>
                    </div>
                    <div className={styles.submitBlock}>
                        <Button className={styles.button} viewType='primary'>Сохранить</Button>
                        <Button className={styles.button} viewType='secondary'>Удалить аккаунт</Button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
