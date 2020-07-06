import React, {ReactNode} from 'react';

import {Button} from 'Src/client/components/button';

import styles from './course-description-block.module.scss';
import {Heading} from 'Components/heading';
import resourceImage from 'Assets/icons/other/resource-picture.svg';
import resourceCode from 'Assets/icons/other/resource-code.svg';
import resourceLink from 'Assets/icons/other/resource-link.svg';
import resourceDocument from 'Assets/icons/other/resource-document.svg';
import jsIcon from 'Assets/icons/technologies/js.png';
import clockIcon from 'Assets/icons/info-icons/clock.svg';
import javascriptImage from 'Assets/images/javascript.svg';

export class CourseDescriptionBlock extends React.PureComponent {
    render(): ReactNode {
        return (
            <div className={ styles.body }>
                <div className={ styles.description }>
                    <div className={ styles.subtitle }>
                        Знакомимся с синтаксисом JavaScript, тренируемся
                        использовать базовые концепции и пишем свои первые
                        программы.
                    </div>
                    <div className={ styles.target }>
                        <Heading size={ 2 }>Для кого этот курс</Heading>
                        <p className={styles.paragraph}>
                            Студенты старших курсов в области информатики и
                            вычислительной техники.
                            <br /><br />
                            Курс рассчитан на слушателей, которые уже владеют
                            каким-либо объектно-ориентированным языком,
                            например, C++, Java или D.
                            Материал предполагает знание не только конструкций
                            структурного программирования,
                            но и понимание ответов на вопросы, вроде «почему
                            важна инкапсуляция», «что такое класс», «зачем нужны
                            виртуальные функции»,
                            «как работать с исключениями». Кроме языковых
                            навыков, также пригодятся познания из области
                            операционных систем: процессы, нити,
                            системные вызовы, виртуальная память.
                        </p>
                    </div>
                    <div className={ styles.target }>
                        <Heading size={ 2 }>Ресурсы</Heading>
                        <div>
                            <div className={ styles.row }>
                                <div className={ styles.column }>
                                    <div className={styles.imageTitleWrapper}>
                                        <img className={ styles.resourceImage }
                                             src={ resourceImage } alt="" />
                                        Изображение
                                    </div>
                                </div>
                                <div className={ styles.column }>
                                    <div className={styles.imageTitleWrapper}>
                                        <img className={ styles.resourceImage }
                                             src={ resourceCode } alt="" />
                                        Код
                                    </div>
                                </div>
                                <div className={ styles.column }>
                                    <div className={styles.imageTitleWrapper}>
                                        <img className={ styles.resourceImage }
                                             src={ resourceLink } alt="" />
                                        Ссылка
                                    </div>
                                </div>
                            </div>
                            <div className={ styles.row }>
                                <div className={ styles.column }>
                                    <div className={styles.imageTitleWrapper}>
                                        <img className={ styles.resourceImage }
                                             src={ resourceDocument } alt="" />
                                        Ссылка
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={ styles.target }>
                        <Heading size={ 2 }>Программа курса</Heading>
                        <div className={ styles.videosWrapper }>
                            <div className={ styles.video }>
                                <div className={ styles.wrapper }>
                                    <img className={ styles.jsIcon }
                                         src={ jsIcon } alt="" />
                                    <div>
                                        <div className={ styles.title }>
                                            Знакомство с JavaScript
                                        </div>
                                        <div className={ styles.counter }>
                                            1 урок
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <img className={ styles.clockIcon }
                                         src={ clockIcon } alt="" />
                                    <span className={ styles.time }>
                                        2:00
                                    </span>
                                </div>
                            </div>
                            <div className={ styles.video }>
                                <div className={ styles.wrapper }>
                                    <img className={ styles.jsIcon }
                                         src={ jsIcon } alt="" />
                                    <div>
                                        <div className={ styles.title }>
                                            Знакомство с JavaScript
                                        </div>
                                        <div className={ styles.counter }>
                                            1 урок
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <img className={ styles.clockIcon }
                                         src={ clockIcon } alt="" />
                                    <span className={ styles.time }>
                                        2:00
                                    </span>
                                </div>
                            </div>
                            <div className={ styles.video }>
                                <div className={ styles.wrapper }>
                                    <img className={ styles.jsIcon }
                                         src={ jsIcon } alt="" />
                                    <div>
                                        <div className={ styles.title }>
                                            Знакомство с JavaScript
                                        </div>
                                        <div className={ styles.counter }>
                                            1 урок
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <img className={ styles.clockIcon }
                                         src={ clockIcon } alt="" />
                                    <span className={ styles.time }>
                                        2:00
                                    </span>
                                </div>
                            </div>
                            <div className={ styles.video }>
                                <div className={ styles.wrapper }>
                                    <img className={ styles.jsIcon }
                                         src={ jsIcon } alt="" />
                                    <div>
                                        <div className={ styles.title }>
                                            Знакомство с JavaScript
                                        </div>
                                        <div className={ styles.counter }>
                                            1 урок
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <img className={ styles.clockIcon }
                                         src={ clockIcon } alt="" />
                                    <span className={ styles.time }>
                                        2:00
                                    </span>
                                </div>
                            </div>
                            <div className={ styles.video }>
                                <div className={ styles.wrapper }>
                                    <img className={ styles.jsIcon }
                                         src={ jsIcon } alt="" />
                                    <div>
                                        <div className={ styles.title }>
                                            Знакомство с JavaScript
                                        </div>
                                        <div className={ styles.counter }>
                                            1 урок
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <img className={ styles.clockIcon }
                                         src={ clockIcon } alt="" />
                                    <span className={ styles.time }>
                                        2:00
                                    </span>
                                </div>
                            </div>
                            <div className={ styles.video }>
                                <div className={ styles.wrapper }>
                                    <img className={ styles.jsIcon }
                                         src={ jsIcon } alt="" />
                                    <div>
                                        <div className={ styles.title }>
                                            Знакомство с JavaScript
                                        </div>
                                        <div className={ styles.counter }>
                                            1 урок
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <img className={ styles.clockIcon }
                                         src={ clockIcon } alt="" />
                                    <span className={ styles.time }>
                                        2:00
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={ styles.control }>
                    <img className={styles.jsImage} src={ javascriptImage } alt="" />
                    <Button className={ styles.button } viewType="primary">Начать
                        просмотр</Button>
                    <Button className={ styles.button } viewType="secondary">Программа
                        курса</Button>
                </div>
            </div>
        );
    }
}
