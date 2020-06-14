import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getAllBlogPostsAC } from 'Src/actions/blog-actions';

import { BlogPostsList } from 'Src/client/components/blog-posts-list';

import { selectArticles, selectBlogIsLoading } from 'Selectors/select-blog';

import { Loading } from 'Components/loading';

type Props = {
    loading: boolean;
    articlesList: any[];
    getAllBlogPostsDA: any;
}

class BlogPostsListWrapper extends Component<Props> {
    componentDidMount() {
        const { getAllBlogPostsDA } = this.props;

        getAllBlogPostsDA();
    }

    render() {
        const { loading, articlesList } = this.props;

        if (loading) {
            return <Loading />
        }
        
        return (
            <BlogPostsList articlesList={ articlesList }/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loading: selectBlogIsLoading(state),
        articlesList: selectArticles(state),
    }
}

const mapDispatchToProps = {
    getAllBlogPostsDA: getAllBlogPostsAC
}

export const BlogPostsListContainer = connect(mapStateToProps, mapDispatchToProps)(BlogPostsListWrapper)
