import React, { PureComponent, ReactNode } from 'react';

import { Logo } from 'Components/logo/logo';
import { Header } from 'Components/common/header';
import { HeaderNavigation } from 'Components/common/header-navigation';
import { PageContainer } from 'Components/common/page-container';
import { Button } from 'Components/common/button';

import * as userIcon from 'Assets/icons/other/user.svg';

import styles from './main-page-style.pcss';

interface Props {}
interface State {}

export class MainPage extends PureComponent<Props, State> {
    render(): ReactNode {
        return (
            <div className={ styles.mainPage }>
                <PageContainer>
                    <Header>
                        <Logo />
                        <HeaderNavigation />
                        <Button
                            text='Вход'
                            className={ styles.marginLeftAuto }
                            icon={ userIcon }
                        />
                    </Header>
                </PageContainer>
            </div>
        );
    }
}
