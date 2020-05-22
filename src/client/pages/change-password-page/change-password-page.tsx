import React, { ReactNode } from 'react';

import { UserPasswordFormBlock } from 'Blocks/user-password-form-block';

export class ChangePasswordPage extends React.PureComponent {
    render(): ReactNode {
        return (
            <UserPasswordFormBlock/>
        );
    }
}
