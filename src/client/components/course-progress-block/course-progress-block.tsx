import React, { ReactNode } from 'react';
import Hoek from '@hapi/hoek';
import { Link } from 'react-router-dom';

import { COURSES_ENDPOINTS } from 'Src/constants/endpoints';

import CompleteIcon from 'Assets/icons/info-icons/check-green.svg';
import ProgressBar from 'Components/progress-bar/progress-bar';

import { Props } from './props';

import styles from './course-progress-block.module.scss';

export class CourseProgressBlock extends React.PureComponent<Props> {
    render(): ReactNode {
        const { percent, courseId } = this.props;
        const isComplete = (percent === 100);

        return (
            <div>
                <div className={styles.body}>
                    <div className={styles.progressCount}>
                        {
                            isComplete
                            ? (
                                <React.Fragment>
                                    Завершено
                                    <img className={styles.completeIcon} src={CompleteIcon} alt='complete'/>
                                </React.Fragment>
                            )
                            : `Просмотрено ${percent}%`
                        }
                    </div>
                    {
                        !isComplete && (
                            <Link
                                to={ Hoek.reachTemplate({ course_id: courseId }, COURSES_ENDPOINTS.study) }
                                className={ styles.continueLink }
                            >
                                Продолжить обучение
                            </Link>
                        )
                    }
                </div>
                <ProgressBar percent={percent}/>
            </div>
        );
    }
}

