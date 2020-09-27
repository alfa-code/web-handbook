import Sequelize, { ModelType, Model } from 'sequelize';

export function getMaterialVideoModel(sequelize): ModelType {
    class MaterialVideo extends Model {
    }

    MaterialVideo.init({
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        link: {
            type: Sequelize.STRING,
            allowNull: false
        },
    }, {
        sequelize,
        tableName: 'materials_videos',
        modelName: 'MaterialVideo'
    })

    return MaterialVideo;
}
