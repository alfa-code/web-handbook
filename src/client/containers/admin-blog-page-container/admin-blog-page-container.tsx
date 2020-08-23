import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    fetchAllPreviewPostsAC,
    deleteArticleByIdStartAC
} from 'Actions/admin/admin-actions';

import { BlogList } from 'Pages/admin/blog/blog-list';

import { selectPreviewArticles } from 'Selectors/admin/select-preview-posts';

import { PostsPreviewArray } from 'Types/common';

type MapDispatchToProps = {
    fetchAllPreviewPostsDA: any;
    deleteArticleByIdStartAD: any;
};

type MapStateToProps = {
    previewArticles: PostsPreviewArray;
}

type Props = MapDispatchToProps & MapStateToProps;

class Container extends Component<Props> {
    render() {
        return (
            <BlogList {...this.props} />
        );
    }
}

const mapStateToProps = (state) => {
    const previewArticles = selectPreviewArticles(state);
    return {
        previewArticles
    }
}

const mapDispatchToProps = {
    fetchAllPreviewPostsDA: fetchAllPreviewPostsAC,
    deleteArticleByIdStartAD: deleteArticleByIdStartAC
}

export const AdminBlogPageContainer = connect(mapStateToProps, mapDispatchToProps)(Container)
