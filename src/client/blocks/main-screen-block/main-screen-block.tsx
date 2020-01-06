import React, { ReactNode } from 'react';

import { SubscribeForm } from 'Src/client/forms/subscribe-form';
import { Heading } from 'Src/client/components/heading';

import mainImage from 'Assets/images/main-illustration.svg';

import styles from './main-screen-block-style.module.scss';

export class MainScreenBlock extends React.PureComponent {
    render(): ReactNode {
        return (
            <div className={styles.mainScreenBlock}>
                <div className={styles.infoBlock}>
                    <Heading size={1}>
                        <span>Бесплатная платформа</span>
                        <br />
                        <span>для обучения и подготовки</span>
                        <br />
                        <span> IT специалистов</span>
                    </Heading>
                    <p className={styles.subheader}>
                        Получите доступ к грамотной и структурированной информации для обучения.
                    </p>
                    <SubscribeForm />
                    <div className={styles.subtextContainer}>
                        <span className={styles.subtext}>
                            Уже пользуетесь Alfa Code?
                        </span>
                        {' '}
                        <a
                            href="/"
                            className={styles.link}
                        >
                            Войдите
                    </a>
                    </div>

                </div>
                <img
                    src={mainImage}
                    alt="Главная иллюстрация"
                    className={styles.image}
                />
            </div>
        );
    }
}
