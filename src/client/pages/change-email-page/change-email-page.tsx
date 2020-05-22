import React, { ReactNode } from 'react';

import { Heading } from 'Components/heading';
import { UserChangeEmailFormBlock } from 'Blocks/user-change-email-form-block';

export class ChangeEmailPage extends React.PureComponent {
    render(): ReactNode {
        return (
            <React.Fragment>
                <Heading size={6}>Сменить email</Heading>
                <UserChangeEmailFormBlock />
            </React.Fragment>
        );
    }
}
