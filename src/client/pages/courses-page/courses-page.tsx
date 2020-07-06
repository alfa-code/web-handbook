import React, { ReactNode } from 'react';

import Breadcrumbs from 'Components/breadcrumbs/breadcrumbs';
import { PageFrame } from 'Components/page-frame';
import { PageContainer } from 'Components/page-container';
import { Heading } from 'Components/heading';
import { CoursesBlock } from 'Blocks/courses-block/courses-block';

export class CoursesPage extends React.PureComponent {
    render(): ReactNode {
        return (
            <PageFrame>
                <PageContainer paddingsOnPhone={ true }>
                    <Breadcrumbs />
                    <Heading size={ 2 }>
                        Основы JavaScript
                    </Heading>
                    <CoursesBlock />
                </PageContainer>
            </PageFrame>
        );
    }
}
