import React, { ReactNode } from 'react';
import { v1 as uuidv1 } from 'uuid';

import graduationCapIcon from 'Assets/icons/bw/graduation-cap.svg';
import thumbsUpIcon from 'Assets/icons/bw/thumbs-up.svg';
import videoIcon from 'Assets/icons/bw/video.svg';

import styles from './main-second-pluses.module.scss';

const texts = [
  {
    img: thumbsUpIcon,
    title: 'Бесплатные материалы',
    text: 'Десятки курсов — бесплатные. После их прохождения вы сможете создать свой сайт.',
  },
  {
    img: videoIcon,
    title: 'Видео-курсы',
    text: 'Покажем суть и дадим знания, которые вы сможете использовать уже сегодня.',
  },
  {
    img: graduationCapIcon,
    title: 'Практические задания',
    text: 'Мы учим работать с живым кодом и самостоятельно решать задачи.',
  },
];

export class MainSecondPlusesBlock extends React.PureComponent {
    renderCell = (texts: any[]) => (
      texts.map((item) => (
        <div className={styles.cell} key={uuidv1()}>
          { this.renderCellContent(item) }
        </div>
      ))
    )

    renderCellContent = (item) => (
      <div className={styles.plusesBlock}>
        <div className={styles.subcell}>
          <span className={styles.imageWrapper}>
            <img
              className={styles.image}
              src={item.img}
              alt="О плюсах платформы"
            />
          </span>
        </div>
        <div className={styles.subcell}>
          <h1 className={styles.header}>
            { item.title }
          </h1>
          <p className={styles.text}>
            { item.text }
          </p>
        </div>
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
