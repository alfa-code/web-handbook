import React from 'react';

import { Button } from 'Components/button';
import { InputSimple } from 'Components/input-simple';

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
