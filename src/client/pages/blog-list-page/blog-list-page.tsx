import React, { Component } from 'react';
import { PageFrame } from 'Components/page-frame';
import { PageContainer } from 'Components/page-container';
import { Heading } from 'Components/heading';
import { BlogPostsListContainer } from 'Src/client/containers/blog-posts-list-container'

export class BlogListPage extends Component {
    render() {
        return (
            <PageFrame>
                <PageContainer paddingsOnPhone={ true }>
                    <Heading size={1}>
                        Полезный блог
                    </Heading>
                    <BlogPostsListContainer />
                </PageContainer>
            </PageFrame>
        );
    }
}
