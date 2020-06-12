import Sequelize, { ModelType, Model } from 'sequelize';

export function getBlogPostModel(sequelize): ModelType {
    class BlogPost extends Model {}

    BlogPost.init({
        post_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        imageAddress: {
            type: Sequelize.STRING,
            allowNull: false
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false
        },
        content: {
            type: Sequelize.TEXT,
            defaultValue: false
        }
    }, {
        sequelize,
        tableName: 'blog',
        modelName: 'BlogPost'
    })

    return BlogPost;
}

