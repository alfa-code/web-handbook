import React, { ReactNode } from 'react';

import { Button } from 'Components/common/button';
import { InputSimple } from 'Components/common/input-simple';

import styles from './main-screen-block-style.pcss';

interface Props {}
interface State {}

export class MainScreenBlock extends React.PureComponent<Props, State> {
    render(): ReactNode {
        return (
            <div className={ styles.mainScreenBlock }>
                <div className={ styles.infoBlock }>
                    <h1>
                        Бесплатная платформа
                        для обучения и подготовки
                        IT специалистов
                    </h1>
                    <p>
                        Получите доступ к грамотной и структурированной информации для обучения.
                    </p>
                    <div className={ styles.subscribeBlock }>
                        <InputSimple
                            placeholder='Введите ваш email'
                        />
                        <Button viewType='primary'>Получить доступ</Button>
                    </div>
                    <span>
                        Уже пользуетесь Alfa Code?
                        <a href='#'>
                            Войдите
                        </a>
                    </span>
                </div>
            </div>
        );
    }
}
