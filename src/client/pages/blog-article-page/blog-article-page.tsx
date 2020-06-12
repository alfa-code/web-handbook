import React, { PureComponent } from 'react';

import { PageFrame } from 'Components/page-frame';
import { PageContainer } from 'Components/page-container';

export class BlogArticlePage extends PureComponent {
    render() {
        return (
            <PageFrame>
                <PageContainer paddingsOnPhone={ true }>
                    ...
                </PageContainer>
            </PageFrame>
        );
    }
}
