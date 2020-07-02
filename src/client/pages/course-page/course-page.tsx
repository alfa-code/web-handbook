import React, { ReactNode } from 'react';
import { PageFrame } from 'Components/page-frame';
import { PageContainer } from 'Components/page-container';
import { CoursePreviewVideoBlock } from 'Blocks/course/course-preview-video-block';
import { Heading } from 'Components/heading';

import styles from './course-page.module.scss';

import { Props } from './props';
import { CourseDescriptionBlock } from 'Blocks/course/course-description-block';

export  class CoursePage extends React.PureComponent<Props> {
    render(): ReactNode {
        const { title = 'Основы JavaScript' } = this.props;

        return (
            <PageFrame>
                <PageContainer paddingsOnPhone={ true }>
                    <Heading size={2}>
                        { title }
                    </Heading>
                    <div className={styles.coursePreviewVideoBlock}>
                        <CoursePreviewVideoBlock/>
                    </div>
                    <div className={styles.courseDescriptionBlock}>
                        <CourseDescriptionBlock/>
                    </div>
                </PageContainer>
            </PageFrame>
        );
    }
}
