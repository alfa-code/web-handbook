import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { Heading } from 'Components/heading';
import { Paragraph } from 'Components/paragraph';
import { limitOfChars } from 'Src/utils/limitOfChars';
import { CourseProgressBlock } from 'Components/course-progress-block';

import { InfoLabel } from 'Components/info-label';

import { Props } from './props';

import styles from './active-course-card.module.scss';

/**
 * Карточка - используется для отображения карточек на блоге и карточек курсов
 *
 * @image ссылка на изображение (превью карточки)
 * @header заголовок карточки
 * @text короткое описание карточки
 * @color цвет подложки изображения
 * @firstCustomSection кастомная сеция перед заголовком (например любой JSX)
 * @firstCustomSection кастомная сеция внизу карточки (например любой JSX)
 *
 * @link Ссылка - если есть, гаголовок карточки является ссылкой
 *
 * */
export class ActiveCourseCard extends Component<Props> {
    renderCustomSection(section: any) {
        if (!section) {
            return null;
        }

        return section;
    }

    getCardHeading = () => {
        const { link, header } = this.props;

        if (!link) {
            return (
                <Heading size={4} className={styles.heading}>
                    { limitOfChars(header, 70) }
                </Heading>
            )
        }

        return (
            <Link to={link} className={ styles.link }>
                <Heading size={4} className={styles.heading}>
                    {limitOfChars(header, 70)}
                </Heading>
            </Link>
        )
    }

    render() {
        const {
            image,
            text,
            header,
        } = this.props;

        return (
            <div className={ `${styles.card} ${styles.horizontal}` }>
                <div className={ styles.header }>
                    <img
                        src={image}
                        alt={header}
                        className={styles.image}
                    />
                </div>
                <div className={styles.body}>
                    <div>
                        <div style={{ marginBottom: '24px', display: 'inline-flex', flexWrap: 'wrap', marginLeft: '-16px' }}>
                            <InfoLabel text="10 видео-уроков" iconType="camera" />
                            <InfoLabel text="3 часа" iconType="clock" />
                        </div>
                        { this.getCardHeading() }
                        <Paragraph className={styles.text}>
                            {limitOfChars(text, 150)}
                        </Paragraph>
                    </div>
                    <div className={styles.customSelection}>
                        <CourseProgressBlock percent={15}/>
                    </div>
                </div>
            </div>
        );
    }
}
