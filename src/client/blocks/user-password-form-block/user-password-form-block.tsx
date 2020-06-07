import React, { ReactNode } from 'react';
import { FormBody, ProfileForm } from 'Components/style-wrappers/profile';
import { Heading } from 'Components/heading';
import { UserPasswordForm } from 'Forms/user-password-form';

export class UserPasswordFormBlock extends React.PureComponent {
    render(): ReactNode {
        return (
            <React.Fragment>
                <Heading size={6}>Сменить пароль</Heading>
                <ProfileForm>
                    <FormBody>
                        <UserPasswordForm/>
                    </FormBody>
                </ProfileForm>
            </React.Fragment>
        );
    }
}
