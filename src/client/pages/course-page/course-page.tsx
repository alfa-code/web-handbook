import React, { ReactNode } from 'react';
import { connect } from 'react-redux';

import { PageFrame } from 'Components/page-frame';
import { PageContainer } from 'Components/page-container';
import { CoursePreviewVideoBlock } from 'Blocks/course/course-preview-video-block';
import { Heading } from 'Components/heading';

import styles from './course-page.module.scss';

import { Props } from './props';
import { CourseDescriptionBlock } from 'Blocks/course/course-description-block';
import Breadcrumbs from 'Components/breadcrumbs/breadcrumbs';
import { changeBackgroundColor } from 'Actions/ui/background-color';

class Course extends React.PureComponent<Props> {
    componentDidMount() {
        this.props.changeBackgroundColor(this.bgColor)
    }

    bgColor = "#FFFBE6";

    render(): ReactNode {
        const { title = 'Основы JavaScript' } = this.props;

        return (
            <PageFrame bgcolor={ this.bgColor }>
                <PageContainer paddingsOnPhone={ true }
                               bgcolor={ this.bgColor }>
                    <Breadcrumbs />
                    <Heading size={2}>
                        { title }
                    </Heading>
                    <div className={styles.coursePreviewVideoBlock}>
                        <CoursePreviewVideoBlock/>
                    </div>
                </PageContainer>
                <PageContainer paddingsOnPhone={ true }>
                    <div className={styles.courseDescriptionBlock}>
                        <CourseDescriptionBlock/>
                    </div>
                </PageContainer>
            </PageFrame>
        );
    }
}

const mapDispatchToProps = {
    changeBackgroundColor: changeBackgroundColor
}

export const CoursePage = connect(null, mapDispatchToProps)(Course);
