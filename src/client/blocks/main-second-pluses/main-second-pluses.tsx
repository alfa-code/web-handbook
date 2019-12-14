import React, { ReactNode } from 'react';

import * as graduationCapIcon from 'Assets/icons/bw/graduation-cap.svg';
import * as thumbsUpIcon from 'Assets/icons/bw/thumbs-up.svg';
import * as videoIcon from 'Assets/icons/bw/video.svg';

import uuidv1 from 'uuid/v1';

import styles from './main-second-pluses.pcss';

const texts = [
    {
        img: thumbsUpIcon,
        title: 'Бесплатные материалы',
        text: 'Десятки курсов — бесплатные. После их прохождения вы сможете создать свой сайт.'
    },
    {
        img: videoIcon,
        title: 'Видео-курсы',
        text: 'Покажем суть и дадим знания, которые вы сможете использовать уже сегодня.'
    },
    {
        img: graduationCapIcon,
        title: 'Практические задания',
        text: 'Мы учим работать с живым кодом и самостоятельно решать задачи.'
    }
];

export class MainSecondPlusesBlock extends React.PureComponent {
    renderCell = (texts: any[]) => {
        return (
            texts.map((item) => {
                return (
                    <div className={ styles.cell } key={ uuidv1() }>
                        { this.renderCellContent(item) }
                    </div>
                );
            })
        );
    }

    renderCellContent = (item) => {
        return (
            <div className={ styles.plusesBlock }>
                <div className={ styles.subcell }>
                    <span className={ styles.imageWrapper }>
                        <img
                            className={ styles.image }
                            src={ item.img }
                            alt='О плюсах платформы'
                        />
                    </span>
                </div>
                <div className={ styles.subcell }>
                    <h1 className={ styles.header }>
                        { item.title }
                    </h1>
                    <p className={ styles.text }>
                        { item.text }
                    </p>
                </div>
            </div>
        );
    }

    render(): ReactNode {
        return (
            <div className={ styles.mainPlusesBlock }>
                { this.renderCell(texts) }
            </div>
        );
    }
}
