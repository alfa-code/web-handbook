import React, { ReactNode } from 'react';

import { HeaderLabel } from 'Src/client/components/header-label';
import { Heading } from 'Src/client/components/heading';
import { Paragraph } from 'Src/client/components/paragraph';

import * as girlImage from 'Assets/images/girl.svg';
import * as dotsImage from 'Assets/images/dots.svg';
import * as whatIsAlfaCodeImage from 'Assets/images/what-is-alfa-code.svg';

import styles from './about-platform.module.scss';

interface Props { }

export class AboutPlatform extends React.PureComponent<Props> {
  render(): ReactNode {
    return (
      <div className={styles.container}>
        <div className={styles.textBlock}>
          <div className={styles.textWrapper}>
            <HeaderLabel>
                            Платформа
            </HeaderLabel>
            <Heading size={2} className={styles.heading}>
                            Что такое Alfa Code?
            </Heading>
            <Paragraph className={styles.paragraph}>
                            Мы группа работающих специалистов по веб-разработке и разработчики открытого исходного кода, предоставляем вам краткие, насыщенные информацией видео-курсы о лучших инструментах в веб-разработке.
            </Paragraph>
            <Paragraph className={styles.paragraph}>
                            Мы уважаем ваше время. Цель этой платформы — предоставить как можно более грамотную и структурированную информацию для обучения.
            </Paragraph>
          </div>
        </div>
        <div className={styles.videoBlock}>
          <div className={styles.videoWrapper}>
            <img src={whatIsAlfaCodeImage} className={styles.bgFormImg} alt="иллюстрация" />
            <img src={dotsImage} className={styles.dotsImg} alt="иллюстрация" />
            <iframe
              title="Видео о нас"
              src="https://player.vimeo.com/video/132471949"
              width="810"
              height="456"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
              className={styles.iframe}
            />
            <img src={girlImage} className={styles.girlImg} alt="Иллюстрация девушки указывающая на видео" />
          </div>
        </div>
      </div>
    );
  }
}
