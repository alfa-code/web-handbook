import React from 'react';

import Logo from 'Components/logo/logo';
import { Header } from 'Components/common/header';
import { HeaderNavigation } from 'Components/common/header-navigation';
import { PageContainer } from 'Components/common/page-container';
import { Button } from 'Components/common/button';

export default class App extends React.Component {
    render() {
        return (
            <PageContainer>
                <Header>
                    <Logo/>
                    <HeaderNavigation />
                    <Button
                        text='Вход'
                    />
                </Header>
            </PageContainer>
        );
    }
}
