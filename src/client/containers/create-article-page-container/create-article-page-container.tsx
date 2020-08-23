import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import {
    createArticleByIdStartAC
} from 'Actions/admin/admin-actions';

import { CreateArticlePage } from 'Src/client/pages/admin/blog/create-article-page';

type MapStateToProps = {
}

type MapDispatchToProps = {
    createArticleByIdStartDA: any;
};

type Props = MapStateToProps & MapDispatchToProps & RouteComponentProps<{ post_id }>;

export class Container extends PureComponent<Props> {
    render() {
        const {
            createArticleByIdStartDA,
        } = this.props;

        return (
            <CreateArticlePage
                createArticleByIdStartDA={ createArticleByIdStartDA }
            />
        );
    }
}

const mapDispatchToProps = {
    createArticleByIdStartDA: createArticleByIdStartAC
}

export const CreateArticlePageContainer = connect(null, mapDispatchToProps)(Container)
