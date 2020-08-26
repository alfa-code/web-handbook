import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import {
    editArticleByIdStartAC
} from 'Actions/admin/admin-actions';

import { UpdateArticlePage } from 'Pages/admin/blog/update-article-page';

import { Props } from './props';

export class Container extends PureComponent<Props> {
    render() {
        const {
            editArticleByIdStartDA,
            match: {
                params: {
                    post_id
                }
            }
        } = this.props;
        return (
            <UpdateArticlePage
                editArticleByIdStartDA={ editArticleByIdStartDA }
                postId={ post_id }
            />
        );
    }
}

const mapDispatchToProps = {
    editArticleByIdStartDA: editArticleByIdStartAC
}

export const EditArticlePageContainer = connect(null, mapDispatchToProps)(Container)
