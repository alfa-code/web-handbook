import React, { ReactNode } from 'react';

import { PageFrame } from 'Components/page-frame';
import { PageContainer } from 'Components/page-container';
import { CoursePreviewVideoBlock } from 'Blocks/course/course-preview-video-block';
import { Heading } from 'Components/heading';

import styles from './course-page.module.scss';

import { Props } from './props';
import { CourseDescriptionBlock } from 'Blocks/course/course-description-block';
import Breadcrumbs from 'Components/breadcrumbs/breadcrumbs';

export class CoursePage extends React.PureComponent<Props> {
    componentDidMount() {
        this.props.changeBackgroundColorDA(this.bgColor)
    }

    bgColor = "#FFFBE6";

    render(): ReactNode {
        const { currentCourse } = this.props;
        console.log('currentCourse',currentCourse )

        return (
            <PageFrame bgcolor={ this.bgColor }>
                <PageContainer
                    paddingsOnPhone={ true }
                    bgcolor={ this.bgColor }
                >
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
                        <CourseDescriptionBlock currentCourse={ currentCourse }/>
                    </div>
                </PageContainer>
            </PageFrame>
        );
    }
}
