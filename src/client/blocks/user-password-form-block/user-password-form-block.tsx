import React, { ReactNode } from 'react';
import styles from './user-password-form-block.module.scss';
import { InputPassword } from 'Components/input-password';
import { Button } from 'Components/button';

export class UserPasswordFormBlock extends React.PureComponent {
    render(): ReactNode {
        return (
            <div className={ styles.content }>
                <div className={ styles.body }>
                    <div className={ styles.input }>
                        <InputPassword name='new-password' placeholder='Новый пароль' size='full'/>
                    </div>
                    <div className={ styles.input }>
                        <InputPassword name='repeat-new-password' placeholder='Подтверждение пароля' size='full'/>
                    </div>
                    <div className={ styles.input }>
                        <InputPassword name='old-password' placeholder='Текущий пароль' size='full'/>
                    </div>
                </div>
                <div className={styles.submitBlock}>
                    <Button viewType='primary'>Сохранить</Button>
                </div>
            </div>
        );
    }
}
