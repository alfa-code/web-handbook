import React, { PureComponent, ReactNode } from 'react';
import classNames from 'classnames';

import { Logo } from 'Components/logo/logo';
import { PageContainer } from 'Components/page-container';
import { Heading } from 'Components/heading';
import { Link as LinkNative, LINK_TYPES } from 'Components/link';
import { InputSimple } from 'Components/input-simple';
import { Button } from 'Components/button';
import { Link } from 'react-router-dom';

import globalStyles from 'Src/client/global.module.scss';

import stylesGlobal from 'Src/client/global.module.scss';
import styles from './page-footer.module.scss';

interface Props {}

export class PageFooter extends PureComponent<Props> {
    renderList = (headerText, itemsArray = []) => {
      const mapItem = (item: any) => {
        return (
          <li key={Math.random()}>
            <Link to={ item.href } className={ stylesGlobal.link_type_1 }>
                { item.name }
            </Link>
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
      <LinkNative type={LINK_TYPES.email} href="alfa.info@alfa-code.ru">
            alfa.info@alfacode.ru
      </LinkNative>
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
      // const currentYear = new Date().getFullYear();

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
            <div className={ `${styles.sectionTwo}` }>
                { this.renderList('Платформа', [
                        {
                            name: 'Курсы',
                            href: '/courses'
                        },
                        {
                            name: 'Блог',
                            href: '/blog'
                        }
                    ])
                }
            </div>
            {/* <div className={ `${styles.sectionThree} disabled`}>
                { this.renderList('Контакты', [this.getEmailLink()]) }
            </div>
            <div className={ `${styles.sectionFour} disabled` }>
                { this.renderList('Рассылка', [this.getEmailBlock()]) }
            </div> */}
            </div>
            </PageContainer>
          </div>
          {/* <div className={styles.bottomBlock}>
            <span className={styles.copyright}>
              { `© «Alfa Code» ${currentYear}` }
            </span>
          </div> */}
        </footer>
      );
    }
}
