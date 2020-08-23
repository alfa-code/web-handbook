import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';


import {
    editArticleByIdStartAC
} from 'Actions/admin/admin-actions';

import { UpdateArticlePage } from 'Pages/admin/blog/update-article-page';

type MapStateToProps = {
}

type MapDispatchToProps = {
    editArticleByIdStartDA: any;
};

type Props = MapStateToProps & MapDispatchToProps & RouteComponentProps<{ post_id }>;

// interface Props extends RouteComponentProps<{ post_id }> {
//     editArticleByIdStartDA: any;
// }

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

// onst mapStateToProps = (state) => {}

const mapDispatchToProps = {
    editArticleByIdStartDA: editArticleByIdStartAC
}

export const EditArticlePageContainer = connect(null, mapDispatchToProps)(Container)
