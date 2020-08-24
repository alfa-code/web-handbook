import React, { ReactNode } from 'react';

import { Spinner } from 'Components/spinner/spinner';
import { CourseCard } from 'Components/course-card/course-card';

import styles from './courses-block.module.scss';

// const courseListInfo = [
//     {
//         image: jsImage,
//         header: 'Основы JavaScript',
//         text: 'Знакомимся с синтаксисом JavaScript, '
//             +
//             'тренируемся использовать базовые концепции и пишем свои первые программы.',
//         firstCustomSection: customSection,
//         type: 'horizontal',
//         color: 'yellow',
//         secondCustomSection: secondCustomSection,
//     },
//     {
//         image: htmlCss,
//         header: 'HTML и CSS для начинающих',
//         text: 'Знакомимся с синтаксисом JavaScript, '
//             +
//             'тренируемся использовать базовые концепции и пишем свои первые программы. ' +
//             'Этот текст должен быть обрезан где-то здесь.',
//         firstCustomSection: customSection,
//         type: 'horizontal',
//         color: 'blue',
//         secondCustomSection: secondCustomSection,
//     },
//     {
//         image: jsImage,
//         header: 'Оформление текста',
//         text: 'Знакомимся с синтаксисом JavaScript, '
//             +
//             'тренируемся использовать базовые концепции и пишем свои первые программы.',
//         firstCustomSection: customSection,
//         type: 'horizontal',
//         color: 'green',
//         secondCustomSection: secondCustomSection,
//     },
//     {
//         image: jsImage,
//         header: 'test1',
//         text: 'Знакомимся с синтаксисом JavaScript, '
//             +
//             'тренируемся использовать базовые концепции и пишем свои первые программы.',
//         firstCustomSection: customSection,
//         type: 'horizontal',
//         color: 'blue',
//         secondCustomSection: secondCustomSection,
//     },
//     {
//         image: jsImage,
//         header: 'test2',
//         text: 'Знакомимся с синтаксисом JavaScript, '
//             +
//             'тренируемся использовать базовые концепции и пишем свои первые программы.',
//         firstCustomSection: customSection,
//         type: 'horizontal',
//         color: 'yellow',
//         secondCustomSection: secondCustomSection,
//     },
// ];

type Props = {
    coursesList: any[],
    getCoursesListStartDA: any;
    loading: boolean;
}

export class CoursesBlock extends React.PureComponent<Props> {
    getCard(item, index) {
        return (
            <div key={ index } className={ styles.col }>
                <CourseCard
                    author={ item.author }
                    courseId={ item.id }
                    image={ item.image }
                    header={ item.title }
                    text={ item.short_description }
                />
            </div>
        );
    }

    getCardList() {
        const { coursesList } = this.props;
        return coursesList.map(this.getCard);
    }

    componentDidMount() {
        const { getCoursesListStartDA } = this.props;
        getCoursesListStartDA();
    }

    render(): ReactNode {
        const { loading } = this.props;

        if (loading) {
            return (
                <Spinner />
            );
        }

        return (
            <div className={ styles.body }>
                { this.getCardList() }
            </div>
        );
    }
}
