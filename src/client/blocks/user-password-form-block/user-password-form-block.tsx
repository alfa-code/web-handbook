import React, { ReactNode } from 'react';
import { InputPassword } from 'Components/input-password';
import { Button } from 'Components/button';
import { FormBody, ProfileForm, SubmitBlock } from 'Components/style-wrappers/profile';

export class UserPasswordFormBlock extends React.PureComponent {
    render(): ReactNode {
        return (
            <ProfileForm>
                <FormBody>
                    <InputPassword
                        className='form-body-input'
                        name='new-password'
                        placeholder='Новый пароль'
                        size='full'
                    />
                    <InputPassword
                        className='form-body-input'
                        name='repeat-new-password'
                        placeholder='Подтверждение пароля'
                        size='full'
                    />
                    <InputPassword
                        className='form-body-input'
                        name='old-password'
                        placeholder='Текущий пароль'
                        size='full'
                    />
                </FormBody>
                <SubmitBlock>
                    <Button viewType='primary'>Сохранить</Button>
                </SubmitBlock>
            </ProfileForm>
        );
    }
}
