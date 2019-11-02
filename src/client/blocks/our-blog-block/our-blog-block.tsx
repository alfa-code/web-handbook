import React from 'react';

import { Definition } from 'Src/client/components/definition';
import { Tag } from 'Src/client/components/tag';
import { Grid } from 'Src/client/components/grid';
import { Card } from 'Src/client/components/card';
import { InfoLabel } from 'Src/client/components/info-label';

import blogImage1 from 'Assets/images/blog/image-1.jpg';
import blogImage2 from 'Assets/images/blog/image-2.jpg';
import blogImage3 from 'Assets/images/blog/image-3.jpg';

import styles from './our-blog-block.pcss';

const data = [
    {
        image: blogImage1,
        header: 'Игры, чтобы попрактиковаться в вёрстке',
        text: 'Специально для вас мы нашли инструменты, которые помогут практиковаться в HTML и CSS в игровой форме.',
        color: 'blue',
        secondCustomSection: bottomCardContent(getTagsList(['html', 'css']), <InfoLabel text='12 марта 2019' iconType='calendar' />)
    },
    {
        image: blogImage2,
        header: 'Основы JavaScript',
        text: 'Алгоритмы приоритизации задач и фич для менеджеров проектов. Как разложить все цели по полочкам для digital проекта.',
        color: 'yellow',
        secondCustomSection: bottomCardContent(getTagsList(['html', 'css']), <InfoLabel text='1 марта 2019' iconType='calendar' />)
    },
    {
        image: blogImage3,
        header: 'IT-тренды: из 2019 в 2020',
        text: 'Города становятся умнее, а развитие быстрого интернета тормозит старый добрый шпионаж.',
        color: 'yellow',
        secondCustomSection: bottomCardContent(getTagsList(['html', 'css']), <InfoLabel text='18 июня 2019' iconType='calendar' />)
    }
];

function bottomCardContent(left, right) {
    return (
        <div className={ styles.bottomContent }>
            <div className={ styles.bottomContentLeft }>
                { left }
            </div>
            <div className={ styles.bottomContentRight }>
                { right }
            </div>
        </div>
    );
}

function getTagsList(tagsArray) {
    return tagsArray.map((tag) => {
        return (
            <Tag tagName={ tag } />
        );
    });
}

export class OurBlogBlock extends React.Component {
    getCard = (item) => {
        return (
            <Card
                image={ item.image }
                key={ item.header }
                header={ item.header }
                text={ item.text }
                color={ item.color }
                firstCustomSection={ item.firstCustomSection }
                secondCustomSection={ item.secondCustomSection }
            />
        );
    }

    renderCards = (cardsArray) => {
        return cardsArray.map(this.getCard);
    }

    render() {
        return (
            <div className={ styles.blogBlock }>
                <div className={ styles.header }>
                    <Definition
                        title='Полезный блог'
                        titleSize={ 2 }
                        text='Свежие статьи о карьере, трендах и технологиях. Читай и учись!'
                        position='center'
                    />
                </div>
                <Grid>
                    { this.renderCards(data) }
                </Grid>
            </div>
        );
    }
}
