import Sequelize, { ModelType, Model } from 'sequelize';

export function getLessonModel(sequelize): ModelType {
    class Lesson extends Model {
        // static associate = (sequelize, selfModel) => {
        //     selfModel.belongsTo(sequelize.models.User, {
        //         foreignKey: {
        //             allowNull: false,
        //             name: 'user'
        //         },
        //     });

        //     selfModel.belongsTo(sequelize.models.Course, {
        //         foreignKey: {
        //             allowNull: false,
        //             name: 'course'
        //         },
        //         as: 'courseInfo'
        //     });
        // }
    }

    Lesson.init({
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        course_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        position: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        is_enabled: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },
        video_is_presented: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },
        video_is_required: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },
        video_material_id: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        text_is_presented: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },
        text_is_required: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },
        text_material_id: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        test_is_presented: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },
        test_is_required: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },
        test_material_id: {
            type: Sequelize.INTEGER,
            allowNull: true
        }
    }, {
        sequelize,
        tableName: 'lessons',
        modelName: 'Lesson'
    })

    return Lesson;
}
