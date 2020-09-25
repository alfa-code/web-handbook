import React, { PureComponent, ReactNode } from 'react';

import { Logo } from 'Components/logo/logo';
import { HeaderNavigation } from 'Components/header-navigation';
import { HeaderUserContainer } from 'Src/client/containers/header-user-container';

import styles from './page-header-style.module.scss';

interface Props { }
interface State { }

export class PageHeader extends PureComponent<Props, State> {
    getContent = () => {
        const { children } = this.props;

        if (children) {
            return children;
        }

        return (
            <>
                <Logo />
                <HeaderNavigation />
                <div className={styles.marginLeftAuto}>
                    <HeaderUserContainer />
                </div>
            </>
        )
    }

    render(): ReactNode {
        return (
            <header className={styles.header}>
                {this.getContent()}
            </header>
        );
    }
}
