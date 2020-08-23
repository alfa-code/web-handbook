import React, { PureComponent } from 'react';

import { Link } from 'react-router-dom';

import { PostsPreviewArray } from 'Types/common';

type Props = {
    fetchAllPreviewPostsDA: any;
    deleteArticleByIdStartAD: any;
    previewArticles: PostsPreviewArray;
};

import styles from './blog-list.module.scss';

export class BlogList extends PureComponent<Props, any> {
    componentDidMount(): void {
        const { fetchAllPreviewPostsDA } = this.props;
        fetchAllPreviewPostsDA();
    }

    articleDeletePrompt(post_id) {
        const { deleteArticleByIdStartAD } = this.props;

        const isDelete = confirm(`Удалить пост с id ${post_id}? `);

        if (isDelete) {
            deleteArticleByIdStartAD(post_id);
        }
    }

    renderArticlesTable = () => {
        const { previewArticles } = this.props;

        const articlesElements = previewArticles.map((item) => {
            const { post_id, title } = item;
            return (
                <tr key={ post_id }>
                    <td>
                        { post_id }
                    </td>
                    <td>
                        { title }
                    </td>
                    <td>
                        <Link to={ `/admin/blog/edit/${post_id}` }>
                            Редактировать
                        </Link>
                    </td>
                    <td>
                        <button onClick={ () => { this.articleDeletePrompt(post_id) } }>
                            Удалить
                        </button>
                    </td>
                </tr>
            )
        });

        return (
            <>
                { articlesElements }
            </>
        )
    }

    render() {
        return (
            <div>
                <Link to={ '/admin/blog/create' }>
                    Создать статью
                </Link>
                <br/>
                <br/>
                <br/>
                <table className={ styles.table }>
                    <tbody>
                        <tr>
                            <td>
                                id записи
                            </td>
                            <td>
                                заголовок статьи
                            </td>
                            <td></td>
                            <td></td>
                        </tr>
                        { this.renderArticlesTable() }
                    </tbody>
                </table>
            </div>
        );
    }
}
