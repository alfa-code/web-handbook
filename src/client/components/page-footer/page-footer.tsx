import React, { PureComponent, ReactNode } from 'react';
import classNames from 'classnames';

import { Logo } from 'Components/logo/logo';
import { PageContainer } from 'Components/page-container';
import { Heading } from 'Components/heading';
import { Link, LINK_TYPES } from 'Components/link';
import { InputSimple } from 'Components/input-simple';
import { Button } from 'Components/button';

import globalStyles from 'Src/client/global.module.scss';

import styles from './page-footer.module.scss';

interface Props {}

export class PageFooter extends PureComponent<Props> {
    renderList = (headerText, itemsArray = []) => {
      const mapItem = (item: any) => {
        return (
          <li key={Math.random()}>
            { item }
          </li>
        );
      };

      return (
        <>
          <Heading size={4}>
            { headerText }
          </Heading>
          <ul className={styles.list}>
            {
                itemsArray.map(mapItem)
            }
          </ul>
        </>
      );
    }

    getEmailLink = () => (
      <Link type={LINK_TYPES.email} href="alfa.info@alfa-code.ru">
                alfa.info@alfacode.ru
      </Link>
    )

    getEmailBlock = () => (
      <>
        <div>
                    Подпишитесь на наши новости
        </div>
        <InputSimple placeholder="Введите ваш email" />
        <Button viewType="secondary">
                    Подписаться
        </Button>
      </>
    )

    render(): ReactNode {
      const currentYear = new Date().getFullYear();

      return (
        <footer className={classNames(styles.footer, globalStyles.verticalNeighbors)}>
          <div className={styles.topBlock}>
            <PageContainer>
              <div className={styles.footerConent}>
                <div className={styles.sectionOne}>
                  <Logo />
                  <p>
                                    Платформа для обучения IT специалистов, которая предоставляет видео-курсы о
                                    лучших инструментах в веб-разработке.
                  </p>
                  <p>
                                    Наши условия использования и конфиденциальности
                  </p>
                </div>
                <div className={ `${styles.sectionTwo} disabled` }>
                  { this.renderList('Платформа', ['Курсы', 'Html справочник', 'Блог']) }
                </div>
                <div className={ `${styles.sectionThree} disabled`}>
                  { this.renderList('Контакты', [this.getEmailLink()]) }
                </div>
                <div className={ `${styles.sectionFour} disabled` }>
                  { this.renderList('Рассылка', [this.getEmailBlock()]) }
                </div>
              </div>
            </PageContainer>
          </div>
          <div className={styles.bottomBlock}>
            <span className={styles.copyright}>
              { `© «Alfa Code» ${currentYear}` }
            </span>
          </div>
        </footer>
      );
    }
}
