import React, { ReactNode } from 'react';

import * as webTechnologyImage from 'Assets/images/web-technology.svg';
import * as upToExpertLevelImage from 'Assets/images/up-to-expert-level.svg';
import * as practicalTrainingImage from 'Assets/images/practical-training.svg';

import { Heading } from 'Components/heading';

import uuidv1 from 'uuid/v1';

import styles from './main-pluses-block.module.scss';

const texts = [
  {
    img: webTechnologyImage,
    title: 'Курсы по HTML, CSS,  JavaScript и другим веб технологиям',
    text: 'Веб разработка - одно из самых перспективных направлений в текущее время. Престижно, высокооплачиваем и главное - безумно интересно.',
  },
  {
    img: upToExpertLevelImage,
    title: 'От основ до профессионала',
    text: 'Мы стараемся делать уроки как для абсолютных пионеров в области, так и для опытных пользователей. Тем самым позволяя постепенно вырасти в настоящего профессионала.',
  },
  {
    img: practicalTrainingImage,
    title: 'Обучение на практике',
    text: 'Знания не подкрепленные практикой имеют мало силы. Нужно много практиковаться, чтобы достичь вершины. Мы собираем и готовим интерактивные курсы для практики над изученным материалом.',
  },
];

export class MainPlusesBlock extends React.PureComponent {
    renderCell = (texts: any[]) => (
      texts.map((item) => (
        <div className={styles.cell} key={uuidv1()}>
          { this.renderCellContent(item) }
        </div>
      ))
    )

    renderCellContent = (item) => (
      <div className={styles.plusesBlock}>
        <div className={styles.imageWrapper}>
          <img
            className={styles.image}
            src={item.img}
            alt="О плюсах платформы"
          />
        </div>
        <Heading size={4}>
          { item.title }
        </Heading>
        <p className={styles.text}>
          { item.text }
        </p>
      </div>
    )

    render(): ReactNode {
      return (
        <div className={styles.mainPlusesBlock}>
          { this.renderCell(texts) }
        </div>
      );
    }
}
