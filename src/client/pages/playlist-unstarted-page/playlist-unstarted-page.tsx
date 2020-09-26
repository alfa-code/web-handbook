import React, { PureComponent } from 'react';
import Hoek from '@hapi/hoek';
import { Link } from 'react-router-dom';

import { COURSES_ENDPOINTS } from 'Src/constants/endpoints';
import { Heading } from 'Src/client/components/heading';
import { PageContainer } from 'Components/page-container';

import styles from './playlist-unstarted-page.module.scss';

export class PlaylistUnstartedPage extends PureComponent<{ courseId: string }> {
    render() {
        const { courseId } = this.props;
        return (
            <PageContainer paddingsOnPhone={ true }>
                <section className={ styles.section }>
                    <Heading size={3} className={styles.heading}>
                        Вы еще не начачи данный курс
                    </Heading>
                    <Link
                        to={ Hoek.reachTemplate({ course_id: courseId }, COURSES_ENDPOINTS.coursePage) }
                        className={styles.link}
                    >
                        Перейти к описанию курса
                    </Link>
                    <Link
                        to={ COURSES_ENDPOINTS.courses }
                        className={styles.link}
                    >
                        Перейти к списку курсов
                    </Link>
                </section>

            </PageContainer>
        );
    }
}
