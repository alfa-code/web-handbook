import React, { ReactNode } from 'react';
import { getCardItem } from 'Components/card/card';
import { Heading } from 'Components/heading';
import { InfoLabel } from 'Components/info-label';

import jsImage from 'Assets/images/other/java-script.png';
import htmlCss from 'Assets/images/other/html-css.png';

import { Props } from './props';

import styles from './courses-progress-block.module.scss';
import { CourseProgressBlock } from 'Components/course-progress-block';

const customSection = (
    <div style={{marginBottom: '24px'}}>
        <InfoLabel text="10 видео-уроков" iconType="camera" />
        <InfoLabel text="3 часа" iconType="clock" />
    </div>
);

const courseListInfo = [
    {
        image: jsImage,
        header: 'Основы JavaScript',
        text: 'Знакомимся с синтаксисом JavaScript, '
            + 'тренируемся использовать базовые концепции и пишем свои первые программы.',
        color: 'yellow',
        firstCustomSection: customSection,
        secondCustomSection: (
            <CourseProgressBlock percent={15}/>
        ),
        type: 'horizontal'
    },
    {
        image: htmlCss,
        header: 'HTML и CSS для начинающих',
        text: 'Знакомимся с синтаксисом JavaScript, '
            + 'тренируемся использовать базовые концепции и пишем свои первые программы.',
        color: 'blue',
        firstCustomSection: customSection,
        secondCustomSection: (
            <CourseProgressBlock percent={100}/>
        ),
        type: 'horizontal'
    },
];

export class CoursesProgressBlock extends React.PureComponent<Props> {
    getCard(item, index) {
        return (
            <div key={index} className={styles.item}>
                {getCardItem(item)}
            </div>
        )
    }

    getCardList(items) {
        return items.map(this.getCard);
    }

    render(): ReactNode {
        const { items = courseListInfo } = this.props;

        return (
            <React.Fragment>
                <Heading size={6}>Прогресс курса</Heading>
                <div className={styles.body}>
                    { this.getCardList(items) }
                </div>
            </React.Fragment>
        );
    }
}
