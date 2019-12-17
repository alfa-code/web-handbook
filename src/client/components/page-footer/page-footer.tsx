import React, { PureComponent, ReactNode } from 'react';
import classNames from 'classnames';

import { Logo } from 'Components/logo/logo';
import { PageContainer } from 'Components/page-container';
import { Heading } from 'Components/heading';
import { Link, LINK_TYPES } from 'Components/link';
import { InputSimple } from 'Components/input-simple';
import { Button } from 'Components/button';

import globalStyles from 'Src/client/global.pcss';

import styles from './page-footer.pcss';

interface Props {}

export class PageFooter extends PureComponent<Props> {
    renderList = (headerText, itemsArray = []) => {
        const mapItem = function (item: any) {
            return (
                <li key={ Math.random() }>
                    { item }
                </li>
            );
        };

        return (
            <>
                <Heading size={ 4 }>
                    { headerText }
                </Heading>
                <ul className={ styles.list }>
                    {
                        itemsArray.map(mapItem)
                    }
                </ul>
            </>
        );
    }

    getEmailLink = () => {
        return (
            <Link type={ LINK_TYPES.email } href='alfa.info@alfa-code.ru'>
                alfa.info@alfacode.ru
            </Link>
        );
    }

    getEmailBlock = () => {
        return (
            <>
                <div>
                    Подпишитесь на наши новости
                </div>
                <InputSimple placeholder='Введите ваш email' />
                <Button viewType='secondary'>
                    Подписаться
                </Button>
            </>
        );
    }

    render(): ReactNode {
        const currentYear = new Date().getFullYear();

        return (
            <footer className={ classNames(styles.footer, globalStyles.verticalNeighbors) }>
                <div className={ styles.topBlock }>
                    <PageContainer>
                        <div className={ styles.footerConent }>
                            <div className={ styles.sectionOne }>
                                <Logo />
                                <p>
                                    Платформа для обучения IT специалистов, которая предоставляет видео-курсы о
                                    лучших инструментах в веб-разработке.
                                </p>
                                <p>
                                    Наши условия использования и конфиденциальности
                                </p>
                            </div>
                            <div className={ styles.sectionTwo }>
                                { this.renderList('Платформа', ['Курсы', 'Html справочник', 'Блог']) }
                            </div>
                            <div className={ styles.sectionThree }>
                                { this.renderList('Контакты', [this.getEmailLink()]) }
                            </div>
                            <div className={ styles.sectionFour }>
                                { this.renderList('Рассылка', [this.getEmailBlock()]) }
                            </div>
                        </div>
                    </PageContainer>
                </div>
                <div className={ styles.bottomBlock }>
                    <span className={ styles.copyright }>
                        { `© «Alfa Code» ${currentYear}` }
                    </span>
                </div>
            </footer>
        );
    }
}
