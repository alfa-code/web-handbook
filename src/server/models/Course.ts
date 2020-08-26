import Sequelize, { ModelType, Model } from 'sequelize';

export function getCourseModel(sequelize): ModelType {
    class Course extends Model {
        static associate = (sequelize, selfModel) => {
            selfModel.belongsTo(sequelize.models.User, {
                foreignKey: {
                    allowNull: false,
                    name: 'author_id'
                },
                as: 'author'
            });
        }
    }

    Course.init({
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        image: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        short_description: {
            type: Sequelize.STRING(512),
            allowNull: false,
        },
        full_description: {
            type: Sequelize.TEXT,
            allowNull: false,
        },
        number_of_videos: {
            type: Sequelize.SMALLINT,
            allowNull: true,
        },
        video_time: {
            type: Sequelize.FLOAT,
            allowNull: true,
        },
        playlist_id: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        author_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
    }, {
        sequelize,
        tableName: 'courses',
        modelName: 'Course',
    });

    return Course;
}
