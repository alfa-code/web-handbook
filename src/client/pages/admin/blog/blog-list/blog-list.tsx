import React, { PureComponent } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

type Props = {};

import styles from './blog-list.module.scss';

export class BlogList extends PureComponent<Props, any> {
    constructor(props) {
        super(props);
        this.state = {
            articles: []
        }
    }

    articleDelitePrompt = async (post_id) => {
        const isDelete = confirm(`Удалить пост с id ${post_id}? `);
        if (isDelete) {
            const { status } = await axios.delete(`/api/delete-blog-article/${post_id}`);
            console.log('status', status);
        }
    }

    renderArticlesTable = () => {
        const { articles } = this.state;

        const articlesElements = articles.map((item) => {
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
                        <button onClick={ () => { this.articleDelitePrompt(post_id) } }>
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
                <button onClick={ async () => {
                        const posts = await axios.get('/api/get-all-blog-posts');
                        console.log('posts.data', posts.data);
                        this.setState({ articles: posts.data });
                    }
                } >
                    Загрузить все записи
                </button>
                <Link to={ '/admin/blog/create' }>
                    Создать статью
                </Link>
                <br/>
                <br/>
                <br/>
                <table className={ styles.table }>
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
                </table>
            </div>
        );
    }
}
