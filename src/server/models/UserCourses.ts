import Sequelize, { ModelType, Model } from 'sequelize';
// import { getUsersModel } from 'Src/server/models/User';
// import { getAccountModel } from 'Src/server/models/Account';

/**
 * Сущность-связка
 * @param sequelize
 * @param UserModel
 */
export function getUserCoursesModel(sequelize, UserModel): ModelType {
    class UserCourse extends Model {
    }

    // const AccountModel = getAccountModel(sequelize);
    // const User = UserModel || getUsersModel(sequelize, AccountModel);

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
