import Sequelize, { ModelType, Model } from 'sequelize';
import { getAccountModel } from 'Src/server/models/Account';

export function getUsersModel(sequelize, AccountModel): ModelType {
    class User extends Model {}

    const Account = AccountModel || getAccountModel(sequelize);

    User.init({
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        // eslint-disable-next-line @typescript-eslint/camelcase
        user_id: {
            type: Sequelize.INTEGER,
            references: {
                model: Account,
                key: 'user_id'
            }
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        surname: {
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
