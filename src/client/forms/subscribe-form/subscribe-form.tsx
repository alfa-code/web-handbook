import React from 'react';

import { Button } from 'Components/common/button';
import { InputSimple } from 'Components/common/input-simple';

import styles from './subscribe-form.pcss';

export function SubscribeForm() {
    return (
        <div className={ styles.block }>
            <InputSimple
                placeholder='Введите ваш email'
            />
            <Button viewType='primary'>Получить доступ</Button>
        </div>
    );
}
