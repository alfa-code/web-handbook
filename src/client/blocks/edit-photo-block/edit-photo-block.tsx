import React, { ReactNode } from 'react';
import { Button } from 'Components/button';

import styles from './edit-photo-block.module.scss';
import { Heading } from 'Components/heading';
import { Avatar } from 'Components/avatar';

class EditPhotoBlock extends React.PureComponent {
    render(): ReactNode {
        return (
            <React.Fragment>
                <Heading size={6}>Редактировать фотографию</Heading>
                <div className={styles.body}>
                    <div className={styles.avatar}>
                        <Avatar />
                    </div>
                    <div className={styles.buttonBlock}>
                        <Button className={styles.button} viewType='primary'>Выбрать фотографию</Button>
                        <Button className={styles.button} viewType='secondary'>Удалить фотографию</Button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default EditPhotoBlock;
