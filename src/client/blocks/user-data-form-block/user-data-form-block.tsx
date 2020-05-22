import React, { ReactNode } from 'react';
import { Heading } from 'Components/heading';
import { InputSimple } from 'Components/input-simple';
import { ProfileForm } from 'Components/style-wrappers/profile-form';

import styles from './user-data-form-block.module.scss';
import { Button } from 'Components/button';
import { FormBody } from 'Components/style-wrappers/form-body';


export class UserDataFormBlock extends React.PureComponent {
    render(): ReactNode {
        return (
            <React.Fragment>
                <Heading size={6}>Редактировать данные</Heading>
                <ProfileForm>
                    <FormBody>
                        <InputSimple className='form-body-input' name='name' placeholder='Имя' size='full'/>
                        <InputSimple className='form-body-input' name='surname' placeholder='Фамилия' size='full'/>
                    </FormBody>
                    <div className={styles.submitBlock}>
                        <Button className={styles.button} viewType='primary'>Сохранить</Button>
                        <Button className={styles.button} viewType='secondary'>Удалить аккаунт</Button>
                    </div>
                </ProfileForm>
            </React.Fragment>
        );
    }
}
