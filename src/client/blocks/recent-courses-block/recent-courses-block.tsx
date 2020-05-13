import React, { ReactNode } from 'react';

import styles from './recent-courses-block.module.scss';
import { Heading } from 'Components/heading';
import { LessonCard } from 'Components/lesson-card';

const items = [
    {
        title: 'Знакомство с JavaScript',
        numberOfLesson: 1,
        desc: 'Основы JavaScript',
        timing: '02:00'
    },
    {
        title: 'Справочники и спецификации',
        numberOfLesson: 2,
        desc: 'Основы JavaScript',
        timing: '44:00'
    },
    {
        title: 'Консоль разработчика',
        numberOfLesson: 4,
        desc: 'Основы JavaScript',
        timing: '28:00'
    }
];

export class RecentCoursesBlock extends React.PureComponent {
    render(): ReactNode {
        return (
            <div>
                <div className={ styles.header }>
                    <Heading size={ 6 }>Недавно смотрели</Heading>
                </div>
                {
                    items.map((item, index) => {
                        return (
                            <LessonCard
                                key={ index + 1}
                                { ...item }
                            />
                        )
                    })
                }
            </div>
        );
    }
}
