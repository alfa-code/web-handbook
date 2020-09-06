import React, { ReactNode } from 'react';

import { PageFrame } from 'Components/page-frame';
import { PageContainer } from 'Components/page-container';
import { CoursePreviewVideoBlock } from 'Blocks/course/course-preview-video-block';
import { Heading } from 'Components/heading';
import { CourseDescriptionBlockContainer } from 'Containers/course-description-block-container';
import Breadcrumbs from 'Components/breadcrumbs/breadcrumbs';

import styles from './course-page.module.scss';

import { Props } from './props';

export class CoursePage extends React.PureComponent<Props> {
    render(): ReactNode {
        const { currentCourse, currentCourseId } = this.props;

        return (
            <PageFrame>
                <PageContainer
                    paddingsOnPhone={ true }                >
                    <Breadcrumbs />
                    <Heading size={ 2 }>
                        { currentCourse.title }
                    </Heading>
                    <div className={styles.coursePreviewVideoBlock}>
                        <CoursePreviewVideoBlock/>
                    </div>
                </PageContainer>
                <PageContainer paddingsOnPhone={ true }>
                    <div className={styles.courseDescriptionBlock}>
                        <CourseDescriptionBlockContainer
                            currentCourseId={ currentCourseId }
                            currentCourse={ currentCourse }
                        />
                    </div>
                </PageContainer>
            </PageFrame>
        );
    }
}
