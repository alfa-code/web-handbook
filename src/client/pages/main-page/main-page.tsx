import React, { PureComponent, ReactNode } from 'react';

import { Logo } from 'Components/logo/logo';
import { PageHeader } from 'Components/common/page-header';
import { HeaderNavigation } from 'Components/common/header-navigation';
import { PageContainer } from 'Components/common/page-container';
import { Button } from 'Components/common/button';
import { MainScreenBlock } from 'Src/client/blocks/main-screen-block';
import { MainPlusesBlock } from 'Src/client/blocks/main-pluses-block';
import { MainSecondPlusesBlock } from 'Src/client/blocks/main-second-pluses';

import * as userIcon from 'Assets/icons/other/user.svg';

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
                <PageContainer>
                    <MainSecondPlusesBlock />
                </PageContainer>
            </div>
        );
    }
}
