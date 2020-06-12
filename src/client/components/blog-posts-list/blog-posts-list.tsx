import React, { Component } from 'react';

import { Grid } from 'Src/client/components/grid';
import { Card } from 'Src/client/components/card';

type Props = {
    articles: any[];
}

export class BlogPostsList extends Component<Props> {
    getCard = (item) => {
        return (
            <Card
                image={item.imageAddress}
                key={item.post_id}
                header={item.title}
                text={item.description}
                firstCustomSection={ 'dsgdg' }
                secondCustomSection={ 'dsgdg' }
                link={ `/blog/article/${item.post_id}` }
            />
        )
    }

    renderCards = () => {
        const { articles } = this.props;

        return articles.map(this.getCard);
    }

    render() {
        return (
            <Grid>
                { this.renderCards() }
            </Grid>
        );
    }
}
