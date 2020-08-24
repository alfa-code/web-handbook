import Sequelize, { ModelType, Model } from 'sequelize';

/**
 * Сущность, относящаяся к аккаунту
 * @param sequelize
 */
export function getAccountModel(sequelize): ModelType {
    class Account extends Model {}

    Account.init({
        // eslint-disable-next-line @typescript-eslint/camelcase
        user_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        username: {
            type: Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        rights: {
            type: Sequelize.STRING,
            allowNull: false
        },
        deleted: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        }

    }, {
        sequelize,
        tableName: 'accounts',
        modelName: 'Account'
    })

    return Account;
}

