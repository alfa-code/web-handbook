import React, { Component } from 'react';

import { Heading } from 'Components/heading';
import { PageFrame } from 'Components/page-frame';
import { PageContainer } from 'Components/page-container';

import Markdown from 'markdown-to-jsx';

type Props = {
    article: any;
}

export class BlogArticlePage extends Component<Props> {
    render() {
        const { article } = this.props;

        if (!article) {
            return null;
        }

        const { title, content } = article;

        return (
            <PageFrame>
                <PageContainer paddingsOnPhone={ true }>
                    <Heading size={2}>
                        { title }
                    </Heading>
                    <Markdown>
                        { content }
                    </Markdown>
                </PageContainer>
            </PageFrame>
        );
    }
}
