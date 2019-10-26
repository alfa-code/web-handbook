import React, { ReactNode } from 'react';

import { Button } from 'Components/common/button';
import { InputSimple } from 'Components/common/input-simple';

import { Heading } from 'Components/common/heading';

import styles from './main-screen-block-style.pcss';

interface Props {}
interface State {}

export class MainScreenBlock extends React.PureComponent<Props, State> {
    render(): ReactNode {
        return (
            <div className={ styles.mainScreenBlock }>
                <div className={ styles.infoBlock }>
                    <Heading size={ 1 } className={ styles.mainHeader }>
                        Бесплатная платформа
                        для обучения и подготовки
                        IT специалистов
                    </Heading>
                    <p className={ styles.subheader }>
                        Получите доступ к грамотной и структурированной информации для обучения.
                    </p>
                    <div className={ styles.subscribeBlock }>
                        <InputSimple
                            placeholder='Введите ваш email'
                        />
                        <Button viewType='primary'>Получить доступ</Button>
                    </div>
                    <div className={ styles.subtextContainer }>
                        <span className={ styles.subtext }>
                            Уже пользуетесь Alfa Code?
                        </span>
                        { ' ' }
                        <a
                            href='/'
                            className={ styles.link }
                        >
                            Войдите
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
