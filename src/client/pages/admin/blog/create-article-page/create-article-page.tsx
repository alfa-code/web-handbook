import React, { useState } from 'react';

import axios from 'axios';

export function CreateArticlePage() {
    const [imageAddress, setNewArticleImageAddress] = useState('');
    const [title, setNewArticleTitle] = useState('');
    const [description, setNewArticleDescription] = useState('');
    const [content, setNewArticleContent] = useState('');

    const createArticle = async (e) => {
        e.preventDefault();
        const newArticle = await axios.post('/api/create-blog-article', {
            title,
            imageAddress,
            description,
            content
        });
        console.log('newArticle', newArticle);
    }

    return (
        <div>
            <form onSubmit={ createArticle }>
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
                    Создать статью
                </button>
            </form>
        </div>
    )
}
