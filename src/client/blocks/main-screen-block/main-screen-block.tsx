import React, { ReactNode } from 'react';

import { SubscribeForm } from 'Src/client/forms/subscribe-form';
import { Heading } from 'Components/common/heading';

import styles from './main-screen-block-style.pcss';

export class MainScreenBlock extends React.PureComponent {
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
                    <SubscribeForm />
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
