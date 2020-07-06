import React, { ReactNode } from 'react';
import { InfoLabel } from 'Components/info-label';

import jsImage from 'Assets/images/javascript.svg';
import htmlCss from 'Assets/images/other/html-css.png';

import styles from './courses-block.module.scss';
import { getCourseCardItem } from 'Components/course-card/course-card';

const customSection = (
    <div style={ {
        marginBottom: '24px',
        display: 'inline-flex',
        flexWrap: 'wrap',
        marginLeft: '-16px',
    } }>
        <InfoLabel text="10 видео-уроков" iconType="camera" />
        <InfoLabel text="3 часа" iconType="clock" />
    </div>
);

const secondCustomSection = (
    <div style={ {display: 'flex', alignItems: 'center'} }>
        <div style={ {
            width: 25,
            height: 25,
            borderRadius: '50%',
            backgroundColor: 'green',
        } } />
        <div style={ {marginLeft: 8} }>
            <div style={ {
                color: '#172A3F',
                fontSize: 14,
                fontFamily: 'Rubik',
                fontWeight: 500,
                marginBottom: 8,
            } }>
                Алексей Вечканов
            </div>
            <div style={ {color: '#B5BBC2', fontSize: 12, fontWeight: 500} }>
                Веб-разработчик в Alfa-bank
            </div>
        </div>
    </div>
);

const courseListInfo = [
    {
        image: jsImage,
        header: 'Основы JavaScript',
        text: 'Знакомимся с синтаксисом JavaScript, '
            +
            'тренируемся использовать базовые концепции и пишем свои первые программы.',
        firstCustomSection: customSection,
        type: 'horizontal',
        color: 'yellow',
        secondCustomSection: secondCustomSection,
    },
    {
        image: htmlCss,
        header: 'HTML и CSS для начинающих HTML и CSS для начинающих HTML и CSS для начинающих',
        text: 'Знакомимся с синтаксисом JavaScript, '
            +
            'тренируемся использовать базовые концепции и пишем свои первые программы. ' +
            'Этот текст должен быть обрезан где-то здесь.',
        firstCustomSection: customSection,
        type: 'horizontal',
        color: 'blue',
        secondCustomSection: secondCustomSection,
    },
    {
        image: jsImage,
        header: 'Оформление текста',
        text: 'Знакомимся с синтаксисом JavaScript, '
            +
            'тренируемся использовать базовые концепции и пишем свои первые программы.',
        firstCustomSection: customSection,
        type: 'horizontal',
        color: 'green',
        secondCustomSection: secondCustomSection,
    },
    {
        image: jsImage,
        header: 'test1',
        text: 'Знакомимся с синтаксисом JavaScript, '
            +
            'тренируемся использовать базовые концепции и пишем свои первые программы.',
        firstCustomSection: customSection,
        type: 'horizontal',
        color: 'blue',
        secondCustomSection: secondCustomSection,
    },
    {
        image: jsImage,
        header: 'test2',
        text: 'Знакомимся с синтаксисом JavaScript, '
            +
            'тренируемся использовать базовые концепции и пишем свои первые программы.',
        firstCustomSection: customSection,
        type: 'horizontal',
        color: 'yellow',
        secondCustomSection: secondCustomSection,
    },
];

export class CoursesBlock extends React.PureComponent {
    getCard(item, index) {
        return (
            <div key={ index } className={ styles.col }>
                { getCourseCardItem(item) }
            </div>
        );
    }

    getCardList(items) {
        return items.map(this.getCard);
    }

    render(): ReactNode {

        return (
            <React.Fragment>
                <div className={ styles.body }>
                    { this.getCardList(courseListInfo) }
                </div>
            </React.Fragment>
        );
    }
}
