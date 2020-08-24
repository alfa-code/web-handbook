import React, { Component, ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { Paragraph } from 'Components/paragraph';
import { limitOfChars } from 'Src/utils/limitOfChars';

import styles from './course-card.module.scss';
import { Heading } from 'Components/heading';

import { InfoLabel } from 'Components/info-label';

interface Props {
    courseId: number;
    image: string;
    header: string;
    text: string;
    author?: any;
}

export class CourseCard extends Component<Props> {
    renderAuthor = (): ReactNode => {
        const { author } = this.props;

        if (!author) return null;

        const { name, surname, description, avatar } = author;

        return (
            <div className={ styles.authorSelection }>
                <img
                    src={ avatar }
                    alt="Автор курса" className={ styles.authorAvatar }
                />
                <div>
                    <div className={ styles.authorName } >
                        { `${name} ${surname}`  }
                    </div>
                    <div className={ styles.authorDescription }>
                        { description }
                    </div>
                </div>
            </div>
        );
    }

    render(): ReactNode {
        const {
            courseId,
            image,
            text,
            header,
        } = this.props;

        const link = `/courses/${courseId}`;

        return (
            <div className={ styles.card }>
                <Link to={ link } className={ styles.link }>
                    <div className={ styles.header }>
                        <img
                            src={ image }
                            alt={ header }
                            className={ styles.image }
                        />
                    </div>
                    <div className={ styles.body }>
                        <div className={ styles.courseMainInfoBlock }>
                            <div className={ styles.courseInfo }>
                                <InfoLabel text="10 видео-уроков" iconType="camera" />
                                <InfoLabel text="3 часа" iconType="clock" />
                            </div>
                            <Heading size={ 4 } className={ styles.heading }>
                                { limitOfChars(header, 70) }
                            </Heading>
                            <Paragraph className={ styles.text }>
                                { limitOfChars(text, 150) }
                            </Paragraph>
                        </div>
                        { this.renderAuthor() }
                    </div>
                </Link>
            </div>
        );
    }
}
