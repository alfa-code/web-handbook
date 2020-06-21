import { Shape } from 'Types/objects';
import { NotFoundError } from 'Src/server/utils/errors/types';

/**
 * Сервис для работы с моделью аккаунта, возвращает обертку над моделями sequelize
 * @param username - логин пользователя
 * @param AccountModel - модель для создания обертки
 * @param initData - начальные значения
 * @constructor
 */
export async function AccountService(username: string, AccountModel, initData: Shape<any> = null) {
    let data = initData;

    if (!initData) {
        const result = await AccountModel.findOne({ where: { username } });
        data = result?.dataValues;

        if (!data) {
            throw new NotFoundError('Account Service');
        }
    }

    return {
        ...data,
        id: data.user_id,
        username,
        accountModel: AccountModel,
        async create(fields) {
            await this.accountModel.create(fields);
            return AccountService(this.username, this.accountModel, data);
        },
        async update(fields) {
            await this.accountModel.update(fields, { where: { username: this.username } });
            return AccountService(this.username, this.accountModel, data);
        },
        async delete() {
            await this.update({ deleted: true })
        },
        toJSON() {
            return data;
        }
    }
}
