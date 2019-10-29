import React, { Component } from 'react';

import { Definition } from 'Components/common/definition';
import { Grid } from 'Components/common/grid';
import { Card } from 'Components/common/card';

import * as htmlCssImage from 'Assets/images/other/html-css.png';
import * as jsImage from 'Assets/images/other/java-script.png';

import styles from './our-curses-block.pcss';

const data = [
    {
        image: htmlCssImage,
        header: 'HTML и CSS для начинающих',
        text: 'Изучаем основы HTML и CSS. На практике разбираемся с семантической разметкой и базовыми механизмами стилизации на примере небольшого сайта.',
        color: 'blue',
        firstCustomSection: 'sdgsdg',
        secondCustomSection: 'sdgsdg',
    },
    {
        image: jsImage,
        header: 'Основы JavaScript',
        text: 'Знакомимся с синтаксисом JavaScript, тренируемся использовать базовые концепции и пишем свои первые программы.',
        color: 'yellow'
    }
];

export class OurCursesBlock extends Component {
    getCard = (item) => {
        return (
            <Card
                image={ item.image }
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
            <div className={ styles.ourCurses }>
                <div className={ styles.header }>
                    <Definition
                        title='Наши курсы'
                        titleSize={ 2 }
                        text='Учим лучшим практикам, техникам и приёмам, которые передаются от профессионала к профессионалу.'
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
