import React, { ReactNode } from 'react';
import { Heading } from 'Components/heading';
import { ProfileForm, FormBody } from 'Components/style-wrappers/profile';
import { UserParamsChangeForm } from 'Forms/user-params-change-form';

export class UserDataFormBlock extends React.PureComponent {
    render(): ReactNode {
        return (
            <React.Fragment>
                <Heading size={6}>Редактировать данные</Heading>
                <ProfileForm>
                    <FormBody>
                        <UserParamsChangeForm />
                    </FormBody>
                </ProfileForm>
            </React.Fragment>
        );
    }
}
