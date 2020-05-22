import React, { ReactNode } from 'react';

import { InputSimple } from 'Components/input-simple';
import { InputPassword } from 'Components/input-password';
import { FormBody, ProfileForm, SubmitBlock } from 'Components/style-wrappers/profile';
import { Button } from 'Components/button';

export class UserChangeEmailFormBlock extends React.PureComponent {
    render(): ReactNode {
        return (
            <ProfileForm>
                <FormBody>
                    <InputSimple className='form-body-input' size='full' name='new-email'/>
                    <InputPassword className='form-body-input' size='full' name='password'/>
                </FormBody>
                <SubmitBlock>
                    <Button viewType='primary'>Сохранить</Button>
                </SubmitBlock>
            </ProfileForm>
        );
    }
}
