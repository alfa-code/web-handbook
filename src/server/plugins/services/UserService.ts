import { ModelType } from 'sequelize';

import { NotFoundError } from 'Src/server/utils/errors/types';

import { Shape } from 'Types/objects';
import { IAsyncService } from 'Types/service';
import { EndService } from 'Src/server/plugins/services/EndService';
import { IAccountService } from 'Src/server/plugins/services/AccountService';

export type IUserService = IAsyncService & {
    id: number;
    model: ModelType;
};

/**
 * Сервис для работы с моделью пользователя, возвращает обертку над моделями sequelize
 * @param accountService - сервис от которого зависит сервис пользователя
 * @param UserModel - модель для создания обертки
 * @param initData - начальные значения
 * @constructor
 */
export async function UserService(
    accountService: IAccountService,
    UserModel: any,
    initData: Shape<any> = null
): Promise<IUserService> {
    let userParams = initData;

    if (!initData) {
        // eslint-disable-next-line @typescript-eslint/camelcase
        const result = await UserModel.findOne({ where: { user_id: accountService.id }});
        userParams = result?.dataValues;

        if (!userParams) {
            throw new NotFoundError('UserService');
        }
    }

    return {
        ...userParams,
        id: userParams.id,
        model: UserModel,
        async map(fn) {
            return await fn(UserService(this.id, this.userModel, userParams))
        },
        async create(fields) {
            this.userModel.create(fields);
            return this.map(service => service);
        },
        async update(fields) {
            // eslint-disable-next-line @typescript-eslint/camelcase
            this.userModel.update(fields, { where: { user_id: this.id }  })
            return this.map(service => service);
        },
        async delete() {
            this.userModel.destroy();
            return EndService.success();
        },
        toJSON() {
            return userParams;
        }
    }
}

