import React, { ReactNode } from 'react';
import { Heading } from 'Components/heading';
// import { InfoLabel } from 'Components/info-label';

import { ActiveCourseCard } from 'Components/active-course-card/active-course-card';

// import jsImage from 'Assets/images/other/java-script.png';
// import htmlCss from 'Assets/images/other/html-css.png';

// import { CardItem } from 'Components/card/props';
import { Props } from './props';

import styles from './courses-progress-block.module.scss';
// import { CourseProgressBlock } from 'Components/course-progress-block';

// const customSection = (
//     <div style={{ marginBottom: '24px', display: 'inline-flex', flexWrap: 'wrap', marginLeft: '-16px' }}>
//         <InfoLabel text="10 видео-уроков" iconType="camera" />
//         <InfoLabel text="3 часа" iconType="clock" />
//     </div>
// );

// const courseListInfo = [
//     {
//         image: jsImage,
//         header: 'Основы JavaScript',
//         text: 'Знакомимся с синтаксисом JavaScript, '
//             + 'тренируемся использовать базовые концепции и пишем свои первые программы.',
//         color: 'yellow',
//         firstCustomSection: customSection,
//         secondCustomSection: (
//             <CourseProgressBlock percent={15}/>
//         ),
//         type: 'horizontal'
//     },
//     {
//         image: htmlCss,
//         header: 'HTML и CSS для начинающих HTML и CSS для начинающих HTML и CSS для начинающих',
//         text: 'Знакомимся с синтаксисом JavaScript, '
//             + 'тренируемся использовать базовые концепции и пишем свои первые программы. ' +
//             'Этот текст должен быть обрезан где-то здесь.',
//         color: 'blue',
//         firstCustomSection: customSection,
//         secondCustomSection: (
//             <CourseProgressBlock percent={100}/>
//         ),
//         type: 'horizontal'
//     },
//     {
//         image: jsImage,
//         header: 'Оформление текста',
//         text: 'Знакомимся с синтаксисом JavaScript, '
//             + 'тренируемся использовать базовые концепции и пишем свои первые программы.',
//         color: 'green',
//         firstCustomSection: customSection,
//         secondCustomSection: (
//             <CourseProgressBlock percent={15}/>
//         ),
//         type: 'horizontal'
//     },
// ];

export class CoursesProgressBlock extends React.PureComponent<Props> {
    getCard(item: any, index) {
        return (
            <div key={index} className={styles.item}>
                <ActiveCourseCard
                    image={ item.courseInfo.image }
                    header={ item.courseInfo.title }
                    text={ item.courseInfo.short_description }
                    courseId={ item.courseInfo.id }
                    // firstCustomSection={item.firstCustomSection}
                    // secondCustomSection={item.secondCustomSection}
                    // type={item.type}
                />
            </div>
        )
    }

    getCardList(items) {
        // console.log('items', items)
        if (!items || items.length === 0) return 'Вы пока не начали ни одного курса.';
        // console.log('items', items)
        return items.map(this.getCard);
    }

    render(): ReactNode {
        const { items } = this.props;

        return (
            <React.Fragment>
                <Heading size={6}>
                    Прогресс курса
                </Heading>
                <div className={styles.body}>
                    { this.getCardList(items) }
                </div>
            </React.Fragment>
        );
    }
}
