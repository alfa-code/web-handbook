import React, { Component } from 'react';
import classNames from 'classnames';

import { Paragraph } from 'Components/paragraph';
import { limitOfChars } from 'Src/utils/limitOfChars';

import styles from './course-card.module.scss';
import { Heading } from 'Components/heading';
import { Link } from 'react-router-dom';

interface Props {
    image?: string;
    header?: string;
    text?: string;
    color?: string;
    firstCustomSection?: any;
    secondCustomSection?: any;
    type?: 'horizontal' | 'default';
    link?: string;
}

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
export class Card extends Component<Props> {
    renderCustomSection(section: any) {
        if (!section) {
            return null;
        }

        return section;
    }

    getCardHeading = () => {
        const {link, header} = this.props;

        if (!link) {
            return (
                <Heading size={ 4 } className={ styles.heading }>
                    { limitOfChars(header, 70) }
                </Heading>
            );
        }

        return (
            <Link to={ link } className={ styles.link }>
                <Heading size={ 4 } className={ styles.heading }>
                    { limitOfChars(header, 70) }
                </Heading>
            </Link>
        );
    };

    render() {
        const {
            image,
            text,
            header,
            color,
            firstCustomSection,
            secondCustomSection,
            type = 'default',
        } = this.props;

        return (
            <div className={ classNames(styles.card, styles[type]) }>
                <div className={ classNames(styles.header, styles[color]) }>
                    <img
                        src={ image }
                        alt={ header }
                        className={ styles.image }
                    />
                </div>
                <div className={ styles.body }>
                    <div>
                        { this.renderCustomSection(firstCustomSection) }
                        { this.getCardHeading() }
                        <Paragraph className={ styles.text }>
                            { limitOfChars(text, 150) }
                        </Paragraph>
                    </div>
                    <div className={ styles.customSelection }>
                        { this.renderCustomSection(secondCustomSection) }
                    </div>
                </div>
            </div>
        );
    }
}

export function getCourseCardItem(item) {
    return (
        <Card
            image={ item.image }
            key={ item.header }
            header={ item.header }
            text={ item.text }
            color={ item.color }
            firstCustomSection={ item.firstCustomSection }
            secondCustomSection={ item.secondCustomSection }
            type={ item.type }
        />
    );
}
