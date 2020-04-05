import React, { PureComponent, ReactNode } from 'react';

import { PageFrame } from 'Components/page-frame';

import { PageContainer } from 'Components/page-container';
import { SubscribeForm } from 'Src/client/forms/subscribe-form';

import { MainScreenBlock } from 'Src/client/blocks/main-screen-block';
import { MainPlusesBlock } from 'Src/client/blocks/main-pluses-block';
import { MainSecondPlusesBlock } from 'Src/client/blocks/main-second-pluses';
import { BannerBlock } from 'Src/client/blocks/banner-block';
import { Technologies } from 'Src/client/blocks/technologies';
import { OurCursesBlock } from 'Src/client/blocks/our-curses-block';
import { OurBlogBlock } from 'Src/client/blocks/our-blog-block';
import { AboutPlatform } from 'Src/client/blocks/about-platform';

import htmlReferenceImage from 'Assets/images/html-reference.svg';
import subscriptionImage from 'Assets/images/subscription.svg';

import { Button } from 'Components/button';

interface Props { }
interface State { }

export class MainPage extends PureComponent<Props, State> {
    render(): ReactNode {
        return (
            <PageFrame>
                <PageContainer paddingsOnPhone={ true }>
                    <MainScreenBlock />
                </PageContainer>
                <PageContainer paddingsOnPhone={ true }>
                    <MainPlusesBlock />
                </PageContainer>
                <PageContainer paddingsOnPhone={ true }>
                    <AboutPlatform />
                </PageContainer>
                <PageContainer paddingsOnPhone={ true }>
                    <MainSecondPlusesBlock />
                </PageContainer>
                <PageContainer paddingsOnPhone={ true }>
                    <OurCursesBlock />
                </PageContainer>
                <BannerBlock
                    imageUrl={htmlReferenceImage}
                    direction="right"
                    undertitle="Html  справочник"
                    title="Список HTML тегов определенных в спецификации HTML&nbsp;5"
                    text="Для удобства все HTML теги разбиты на категории, согласно их назначению. Если вам нужен какой-то конкретный тег, то в левом меню теги отсортированы."
                >
                    <Button viewType="primary">
                        Смотреть справочник
                    </Button>
                </BannerBlock>
                <PageContainer paddingsOnPhone={ true }>
                    <OurBlogBlock />
                </PageContainer>
                <BannerBlock
                    imageUrl={subscriptionImage}
                    direction="left"
                    undertitle="обновления"
                    title="Мы будем присылать вам новости о новых курсах"
                    text="Для удобства все HTML теги разбиты на категории, согласно их назначению. Если вам нужен како-то конкретный тег, то в левом меню теги отсортированы."
                >
                    <SubscribeForm />
                </BannerBlock>
                <PageContainer paddingsOnPhone={ true }>
                    <Technologies />
                </PageContainer>
            </PageFrame>
        );
    }
}
