import { ModelType } from 'sequelize';

import { NotFoundError } from 'Src/server/utils/errors/types';
import { UserService } from 'Src/server/plugins/services/UserService';
import { accountDefaults } from 'Src/server/migrations/defaults/accountDefaults';
import { EndService } from 'Src/server/plugins/services/EndService';

import { Shape } from 'Types/objects';
import { IAsyncService } from 'Types/service';

export type IAccountService = IAsyncService & {
    id: number;
    username: string;
    accountModel: ModelType;
    services: Shape<(...args) => Promise<IAsyncService>>;
};

/**
 * Сервис для работы с моделью аккаунта, возвращает обертку над моделями sequelize
 * @param username - логин пользователя
 * @param AccountModel - модель для создания обертки
 * @param initData - начальные значения
 * @param services - сервисы, связанные с данным
 * @constructor
 */
export async function AccountService(
    username: string,
    AccountModel,
    initData: Shape<any> = null,
    services = { userService: UserService }
): Promise<IAccountService> {
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
        services,
        async map(fn) {
            return await fn(AccountService(this.username, this.accountModel, data))
        },
        async create(fields) {
            await this.accountModel.create(fields);
            const UserService = await this.services.userService(this.map(service => service), this.accountModel)
            await UserService.create(accountDefaults);
            return this.map(service => service);
        },
        async update(fields) {
            await this.accountModel.update(fields, { where: { username: this.username } });
            return this.map(service => service);
        },
        async delete() {
            const UserService = await this.services.userService(this.map(service => service), this.accountModel)
            await UserService.delete()

            if (UserService.success) {
                await this.update({ deleted: true });
                return EndService.success();
            } else {
                return EndService.error('UNABLE_TO_DELETE');
            }

        },
        toJSON() {
            return data;
        }
    }
}
