import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import Markdown from 'markdown-to-jsx';

import { Heading } from 'Components/heading';
import { PageFrame } from 'Components/page-frame';
import { PageContainer } from 'Components/page-container';

import { monokaiTheme } from './highlight-monokai';

type Props = {
    article: any;
}

const WrappedSyntaxHighlighter = ({ children, theme }: any) => {
    // TODO: children - это строки коротые будут отрендерены с подсветкой
    // атрибут language - может принимать только одно значение
    // пожтому придется динимически определять тип контента и подставлять нужный тип синтаксиса
    return (
        <SyntaxHighlighter language="javascript|css" style={ theme }>
            { children }
        </SyntaxHighlighter>
    );
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
                    <Markdown
                        options={{
                            overrides: {
                                code: {
                                    component: WrappedSyntaxHighlighter,
                                    props: {
                                        theme: monokaiTheme
                                    }
                                },
                            },
                        }}
                    >
                        { content }
                    </Markdown>
                </PageContainer>
            </PageFrame>
        );
    }
}
