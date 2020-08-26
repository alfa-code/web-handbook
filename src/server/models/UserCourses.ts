import Sequelize, { ModelType, Model } from 'sequelize';

/**
 * Сущность-связка
 * @param sequelize
 */
export function getUserCoursesModel(sequelize): ModelType {
    class UserCourse extends Model {}

    UserCourse.init({
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        user: {
            type: Sequelize.INTEGER,
            references: {
                model: 'User',
                key: 'id'
            }
        },
        // TODO: When Course model will be done - add reference here
        course: {
            type: Sequelize.INTEGER,
            allowNull: false
        }

    }, {
        sequelize,
        tableName: 'user_courses',
        modelName: 'UserCourses'
    })

    return UserCourse;
}
