import React, { ReactNode } from 'react';
import EditPhotoBlock from 'Blocks/edit-photo-block/edit-photo-block';
import { UserDataFormBlock } from 'Blocks/user-data-form-block';

import styles from './user-settings-page.module.scss';

export class UserSettingsPage extends React.PureComponent {
    render(): ReactNode {
        return (
            <React.Fragment>
                <EditPhotoBlock/>
                <div className={styles.userDataFormBlock}>
                    <UserDataFormBlock/>
                </div>
            </React.Fragment>

        );
    }
}
