import React, { Component } from 'react';
import { connect } from 'react-redux';

import { RouteComponentProps } from 'react-router-dom';

import { BlogArticlePage } from 'Src/client/pages/blog-article-page';

import { getBlogPostByIdAC } from 'Actions/blog-actions';

import { selectBlogArticleById } from 'Selectors/blog/select-article-by-id';

// import { selectArticles, selectBlogIsLoading } from 'Selectors/select-blog';

// import { Loading } from 'Components/loading';

type ReduxStateProps = {
    article: any;
};

type ReduxDispatchProps = {
    getBlogPostByIdDA: (id: string) => {};
};

type Props = ReduxStateProps & ReduxDispatchProps & RouteComponentProps<{id?: string }>;

class Container extends Component<Props> {
    componentDidMount() {
        const { match: { params: { id }}, getBlogPostByIdDA } = this.props;

        if (id) {
            getBlogPostByIdDA(id);
        }
    }

    render() {
        const { article } = this.props;

        return (
            <BlogArticlePage article={ article }/>
        );
    }
}

const mapStateToProps = (state, props) => {
    const { match: { params: { id }} } = props;

    return {
        article: selectBlogArticleById(state, id)
    }
}

const mapDispatchToProps = {
    getBlogPostByIdDA: getBlogPostByIdAC
}

export const BlogArticlePageContainer = connect(mapStateToProps, mapDispatchToProps)(Container)
