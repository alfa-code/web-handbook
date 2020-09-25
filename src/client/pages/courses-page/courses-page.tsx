import React, { ReactNode } from 'react';

import { CoursesBlockContainer } from 'Containers/courses-block-container';

import Breadcrumbs from 'Components/breadcrumbs/breadcrumbs';
import { PageFrame } from 'Components/page-frame';
import { PageContainer } from 'Components/page-container';
import { Heading } from 'Components/heading';

export class CoursesPage extends React.PureComponent {
    render(): ReactNode {
        return (
            <PageFrame>
                <PageContainer paddingsOnPhone={ true }>
                    <Breadcrumbs />
                    <Heading size={ 2 }>
                        Все курсы Alfa Code
                    </Heading>
                    <CoursesBlockContainer />
                </PageContainer>
            </PageFrame>
        );
    }
}