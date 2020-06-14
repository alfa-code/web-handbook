import React, { Component } from 'react';

import { Grid } from 'Src/client/components/grid';
import { Card } from 'Src/client/components/card';

import styles from './blog-posts-list.module.scss'

type Props = {
    articlesList: any[];
}

export class BlogPostsList extends Component<Props> {
    getCard = (item) => {
        return (
            <Card
                image={item.imageAddress}
                key={item.post_id}
                header={item.title}
                text={item.description}
                // firstCustomSection={ '---' }
                // secondCustomSection={ '---' }
                link={ `/blog/article/${item.post_id}` }
            />
        )
    }

    renderCards = () => {
        const { articlesList } = this.props;

        if (!articlesList) {
            return null;
        }

        return articlesList.map(this.getCard);
    }

    render() {
        return (
            <Grid className={ styles.container }>
                { this.renderCards() }
            </Grid>
        );
    }
}
