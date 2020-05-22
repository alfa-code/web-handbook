import React, { ReactNode } from 'react';

import { UserPasswordFormBlock } from 'Blocks/user-password-form-block';
import { Heading } from 'Components/heading';

export class ChangePasswordPage extends React.PureComponent {
    render(): ReactNode {
        return (
            <React.Fragment>
                <Heading size={6}>Сменить пароль</Heading>
                <UserPasswordFormBlock />
            </React.Fragment>

        );
    }
}
