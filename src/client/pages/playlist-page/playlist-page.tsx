import React, {PureComponent, ReactNode} from 'react';

import styles from './playlist-page.module.scss';
import {PageContainer} from 'Components/page-container';
import {PageFrame} from 'Components/page-frame';
import {MemoizedPlayer} from 'Components/player/player';
import {PlayerManagement} from 'Components/player-management';
import Breadcrumbs from 'Components/breadcrumbs/breadcrumbs';

export class PlaylistPage extends PureComponent {
    render(): ReactNode {
        return (
            <PageFrame darkMode={true}>
                <PageContainer paddingsOnPhone={true} darkMode={true}>
                    <div className={styles.playlistBlock}>
                        <MemoizedPlayer />
                        <PlayerManagement />
                    </div>
                </PageContainer>
                <PageContainer>
                    <div className={styles.textWrapper}>
                        <Breadcrumbs />
                        <div className={styles.title}>
                            Основы JavaScript #1 — Алексей Вечканов, Альфа Банк
                        </div>
                        <div className={styles.description}>
                            Расшифровка
                        </div>

                        <p>
                            <span>00:00</span> Начните с того, что выньте всю
                            табличку. Этот компонент travelVR будет отображать
                            ноль, и у нас не будет никаких стилей. Далее
                            визуализируем компонент вида. Внутри этого
                            представления у нас будет текстовый компонент,
                            подобный этому. Я собираюсь ввести «Hello, Egghead»
                            внутри этого текстового компонента.
                        </p>
                        <p>
                            <span>00:15</span> После того, как мы сохраним и
                            обновим это, мы увидим здесь текст «Привет,
                            яйцеголовый». Мы хотели бы иметь возможность
                            стилизовать как представление - представление в
                            основном похоже на div - так и текстовый компонент.
                            Для этого у нас будет mainView
                            и объект приветствия.
                        </p>
                        <p>
                            <span>00:31</span> Внутри основного вида у нас будет
                            высота 600, ширина 600, а также отступ 10, и мы
                            собираемся установить цвет фона для этого оттенка
                            серого. Внутри объекта приветствия, размер шрифта
                            40. Мы собираемся установить ширину на 50 процентов,
                            на полях сверху до 5, цвет фона на этот оттенок
                            синего, а цвет текста на белый.
                        </p>
                    </div>
                </PageContainer>
            </PageFrame>
        );
    }
}
