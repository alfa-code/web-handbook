import React, { PureComponent, ReactNode } from 'react';

import { Logo } from 'Components/logo/logo';
import { PageHeader } from 'Components/common/page-header';
import { HeaderNavigation } from 'Components/common/header-navigation';
import { PageContainer } from 'Components/common/page-container';
import { PageFooter } from 'Components/common/page-footer';

import { SubscribeForm } from 'Src/client/forms/subscribe-form';

import { MainScreenBlock } from 'Src/client/blocks/main-screen-block';
import { MainPlusesBlock } from 'Src/client/blocks/main-pluses-block';
import { MainSecondPlusesBlock } from 'Src/client/blocks/main-second-pluses';
import { BannerBlock } from 'Src/client/blocks/banner-block';
import { Technologies } from 'Src/client/blocks/technologies';

import * as htmlReferenceImage from 'Assets/images/html-reference.svg';
import * as subscriptionImage from 'Assets/images/subscription.svg';
import * as userIcon from 'Assets/icons/other/user.svg';

import { Button } from 'Components/common/button';

import styles from './main-page-style.pcss';

interface Props {}
interface State {}

export class MainPage extends PureComponent<Props, State> {
    render(): ReactNode {
        return (
            <div className={ styles.mainPage }>
                <PageContainer>
                    <PageHeader>
                        <Logo />
                        <HeaderNavigation />
                        <Button
                            text='Вход'
                            className={ styles.marginLeftAuto }
                            icon={ userIcon }
                            viewType='secondary'
                        />
                    </PageHeader>
                </PageContainer>
                <PageContainer>
                    <MainScreenBlock />
                </PageContainer>
                <PageContainer>
                    <MainPlusesBlock />
                </PageContainer>
                <BannerBlock
                    imageUrl={ htmlReferenceImage }
                    direction='right'
                    undertitle='Html  справочник'
                    title='Список HTML тегов определенных в спецификации HTML 5'
                    text='Для удобства все HTML теги разбиты на категории, согласно их назначению. Если вам нужен какой-то конкретный тег, то в левом меню теги отсортированы.'
                >
                    <Button viewType='primary'>
                        Смотреть справочник
                    </Button>
                </BannerBlock>
                <BannerBlock
                    imageUrl={ subscriptionImage }
                    direction='left'
                    undertitle='обновления'
                    title='Мы будем присылать вам новости о новых курсах'
                    text='Для удобства все HTML теги разбиты на категории, согласно их назначению. Если вам нужен како-то конкретный тег, то в левом меню теги отсортированы.'
                >
                    <SubscribeForm />
                </BannerBlock>
                <PageContainer>
                    <MainSecondPlusesBlock />
                </PageContainer>
                <PageContainer>
                    <Technologies />
                </PageContainer>
                <PageFooter />
            </div>
        );
    }
}
