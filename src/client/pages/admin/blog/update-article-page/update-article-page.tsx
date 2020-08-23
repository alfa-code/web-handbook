import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Props {
    editArticleByIdStartDA: any;
    postId: string;
}

export function UpdateArticlePage(props: Props) {
    const {
        editArticleByIdStartDA,
        postId
    } = props;

    const [imageAddress, setNewArticleImageAddress] = useState(null);
    const [title, setNewArticleTitle] = useState(null);
    const [description, setNewArticleDescription] = useState(null);
    const [content, setNewArticleContent] = useState(null);

    const updateArticle = async (e) => {
        e.preventDefault();

        editArticleByIdStartDA({
            postId,
            title,
            imageAddress,
            description,
            content
        });
    }

    useEffect(() => {
        const targetPost = axios.get(`/api/get-blog-post-by-id/${postId}`);
        targetPost.then((response) => {
            console.log('response.data', response.data);

            const {
                title,
                imageAddress,
                description,
                content
            } = response.data;

            setNewArticleTitle(title);
            setNewArticleImageAddress(imageAddress);
            setNewArticleDescription(description);
            setNewArticleContent(content);
        });
    }, []);

    if (
        title === null ||
        imageAddress === null ||
        description === null ||
        content === null
    ) {
        return (
            <span>
                Loading...
            </span>
        )
    }

    return (
        <div>
            <form onSubmit={ updateArticle }>
                <label htmlFor="imageAddress">
                    imageAddress
                    <input name='imageAddress' value={ imageAddress } onChange={ (e) => {
                        setNewArticleImageAddress(e.target.value);
                    } }/>
                </label>
                <br/>

                <label htmlFor="title">
                    title
                    <input name='title' value={ title } onChange={ (e) => {
                        setNewArticleTitle(e.target.value);
                    } }/>
                </label>
                <br/>

                <label htmlFor="description">
                    description
                    <input name='description' value={ description } onChange={ (e) => {
                        setNewArticleDescription(e.target.value);
                    } }/>
                </label>
                <br/>

                <label htmlFor="content">
                    content
                    <input name='content' value={ content } onChange={ (e) => {
                        setNewArticleContent(e.target.value);
                    } }/>
                </label>

                <br/>
                <button type='submit'>
                    Обновить статью
                </button>
            </form>
        </div>
    )
}
