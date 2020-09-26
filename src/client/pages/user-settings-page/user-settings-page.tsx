import React, { ReactNode } from 'react';
import EditPhotoBlock from 'Blocks/edit-photo-block/edit-photo-block';
import { UserDataFormBlock } from 'Blocks/user-data-form-block';

import styles from './user-settings-page.module.scss';

import { Props } from './props';

export class UserSettingsPage extends React.PureComponent<Props> {
    render(): ReactNode {
        const { userParams } = this.props;
        const { avatar } = userParams;
        return (
            <React.Fragment>
                <EditPhotoBlock avatar={ avatar }/>
                <div className={styles.userDataFormBlock}>
                    <UserDataFormBlock/>
                </div>
            </React.Fragment>

        );
    }
}
