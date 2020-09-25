import Sequelize, { ModelType, Model } from 'sequelize';

export function getUserCoursesModel(sequelize): ModelType {
    class UserCourses extends Model {
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

    UserCourses.init({
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        user_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        course_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        active_lesson: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        is_finished: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        }
    }, {
        sequelize,
        tableName: 'user_courses',
        modelName: 'UserCourses'
    })

    return UserCourses;
}