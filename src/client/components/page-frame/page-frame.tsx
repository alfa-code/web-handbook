import React, { PureComponent, ReactNode } from 'react';

import { PageHeader } from 'Components/page-header';
import { PageContainer } from 'Components/page-container';
import { PageFooter } from 'Components/page-footer';

import styles from './style.module.scss';

interface Props {
    children: ReactNode;
    darkMode?: boolean;
}
interface State { }

export class PageFrame extends PureComponent<Props, State> {
    render(): ReactNode {
        const { children, darkMode } = this.props;

        return (
            <div className={styles.container}>
                <PageContainer darkMode={darkMode}>
                    <PageHeader />
                </PageContainer>
                { children }
                <PageFooter />
            </div>
        );
    }
}
