import React, { ReactNode } from 'react';

import { Button } from 'Src/client/components/button';

import styles from './course-description-block.module.scss';
import { Heading } from 'Components/heading';

export class CourseDescriptionBlock extends React.PureComponent {
    render(): ReactNode {
        return (
            <div className={styles.body}>
                <div className={styles.description}>
                    <div className={styles.subtitle}>
                        Знакомимся с синтаксисом JavaScript, тренируемся использовать базовые концепции и пишем свои первые программы.
                    </div>
                    <div className={styles.target}>
                        <Heading size={2}>Для кого этот курс</Heading>
                        <div>
                            Студенты старших курсов в области информатики и вычислительной техники.
                            Курс рассчитан на слушателей, которые уже владеют каким-либо объектно-ориентированным языком, например, C++, Java или D.
                            Материал предполагает знание не только конструкций структурного программирования,
                            но и понимание ответов на вопросы, вроде «почему важна инкапсуляция», «что такое класс», «зачем нужны виртуальные функции»,
                            «как работать с исключениями». Кроме языковых навыков, также пригодятся познания из области операционных систем: процессы, нити,
                            системные вызовы, виртуальная память.
                        </div>
                    </div>
                </div>
                <div className={styles.control}>
                    <Button className={styles.button} viewType="primary">Начать просмотр</Button>
                    <Button className={styles.button} viewType="secondary">Программа курса</Button>
                </div>
            </div>
        );
    }
}
