import Sequelize, { ModelType, Model } from 'sequelize';
// import { getAccountModel } from 'Src/server/models/Account';

/**
 * Сущность с параметрами пользователя
 * @param sequelize
 * @param AccountModel
 */
export function getUsersModel(sequelize, /* AccountModel */): ModelType {
    class User extends Model {
        static associate = (sequelize, selfModel) => {
            selfModel.belongsTo(sequelize.models.Account, {
                foreignKey: {
                    allowNull: false,
                    name: 'user_id'
                },
            });
        }
    }

    // const Account = AccountModel || getAccountModel(sequelize);

    User.init({
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        user_id: {
            type: Sequelize.INTEGER,
            // references: {
            //     model: 'Account',
            //     key: 'user_id'
            // }
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        surname: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false
        },
        avatar: {
            type: Sequelize.STRING,
            allowNull: true
        },
    }, {
        sequelize,
        tableName: 'users',
        modelName: 'User'
    })

    return User;
}
