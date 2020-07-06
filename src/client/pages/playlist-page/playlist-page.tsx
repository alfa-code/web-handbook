import React, {PureComponent, ReactNode} from 'react';
import { connect } from 'react-redux';

import styles from './playlist-page.module.scss';
import {PageContainer} from 'Components/page-container';
import {PageFrame} from 'Components/page-frame';
import {MemoizedPlayer} from 'Components/player/player';
import {PlayerManagement} from 'Components/player-management';
import Breadcrumbs from 'Components/breadcrumbs/breadcrumbs';
import {changeBackgroundColor} from 'Actions/ui/background-color';

type Props = {
    changeBackgroundColor: (value: string) => void;
}

class PlayList extends PureComponent<Props> {

    componentDidMount() {
        this.props.changeBackgroundColor(this.bgColor)
    }

    bgColor = "#0b1f35";

    render(): ReactNode {
        return (
            <PageFrame bgcolor={ this.bgColor } darkMode={ true }>
                <PageContainer paddingsOnPhone={true}
                               bgcolor={ this.bgColor }>
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

                        <p className={ styles.courseParagraph }>
                            <span className={ styles.time }>00:00</span> Начните с того, что выньте всю
                            табличку. Этот компонент travelVR будет отображать
                            ноль, и у нас не будет никаких стилей. Далее
                            визуализируем компонент вида. Внутри этого
                            представления у нас будет текстовый компонент,
                            подобный этому. Я собираюсь ввести «Hello, Egghead»
                            внутри этого текстового компонента.
                        </p>
                        <p className={ styles.courseParagraph }>
                            <span className={ styles.time }>00:15</span> После того, как мы сохраним и
                            обновим это, мы увидим здесь текст «Привет,
                            яйцеголовый». Мы хотели бы иметь возможность
                            стилизовать как представление - представление в
                            основном похоже на div - так и текстовый компонент.
                            Для этого у нас будет mainView
                            и объект приветствия.
                        </p>
                        <p className={ styles.courseParagraph }>
                            <span className={ styles.time }>00:31</span> Внутри основного вида у нас будет
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

const mapDispatchToProps = {
    changeBackgroundColor: changeBackgroundColor
}

export const PlaylistPage = connect(null, mapDispatchToProps)(PlayList);
