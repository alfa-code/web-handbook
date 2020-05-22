import React, { ReactNode } from 'react';
import { Heading } from 'Components/heading';
import { InputSimple } from 'Components/input-simple';
import { ProfileForm, FormBody, SubmitBlock } from 'Components/style-wrappers/profile';
import { Button } from 'Components/button';

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
                    <SubmitBlock>
                        <Button viewType='primary'>Сохранить</Button>
                        <Button viewType='secondary'>Удалить аккаунт</Button>
                    </SubmitBlock>
                </ProfileForm>
            </React.Fragment>
        );
    }
}
