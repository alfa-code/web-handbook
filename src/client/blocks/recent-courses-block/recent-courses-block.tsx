import React, { ReactNode } from 'react';

import styles from './recent-courses-block.module.scss';
import { Heading } from 'Components/heading';
import { LessonCard } from 'Components/lesson-card';

export class RecentCoursesBlock extends React.PureComponent {
    render(): ReactNode {
        return (
            <div>
                <div className={ styles.header }>
                    <Heading size={ 6 }>Недавно смотрели</Heading>
                </div>
                {
                    [ 1, 2 ].map(item => {
                        return (
                            <LessonCard
                                key={ item }
                                title={ 'Знакомство с JavaScript' }
                                desc={ 'Основы JavaScript' }
                                numberOfLesson={ 1 }
                                timing={ '04:00' }
                            />
                        )
                    })
                }
            </div>
        );
    }
}
