import React, { Profiler, ReactNode } from 'react';

import { PageContainer } from 'Components/page-container';
import { PageFooter } from 'Components/page-footer';
import { MobileHeader } from 'Components/mobile-header/mobile-header';

import styles from './style.module.scss';
import { MatchMedia } from 'Components/math-media';
import { PageHeader } from 'Components/page-header';
import { BREAKPOINTS } from 'Constants/media';

interface Props {
    children: ReactNode;
}
interface State { }

export class PageFrame extends React.Component<Props, State> {
    render(): ReactNode {
        const { children } = this.props;

        return (
            <div className={styles.container}>
                <PageContainer>
                    <MatchMedia maxWidth={`>=${BREAKPOINTS.TABLET_2}`}>
                        <PageHeader/>
                    </MatchMedia>
                    <MatchMedia maxWidth={`<${BREAKPOINTS.TABLET_2}`}>
                        <MobileHeader />
                    </MatchMedia>
                </PageContainer>
                <main className={ styles.main }>
                    { children }
                </main>
                <PageFooter />
            </div>
        );
    }
}
