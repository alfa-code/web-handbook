import { Shape } from 'Types/objects';
import { NotFoundError } from 'Src/server/utils/errors/types';

/**
 * Сервис для работы с моделью пользователя, возвращает обертку над моделями sequelize
 * @param accountService - сервис от которого зависит сервис пользователя
 * @param UserModel - модель для создания обертки
 * @param initData - начальные значения
 * @constructor
 */
export async function UserService(
    accountService: any,
    UserModel: any,
    initData: Shape<any> = null
) {
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
        userModel: UserModel,
        async create(fields) {
            this.userModel.create(fields);
            return UserService(this.id, this.userModel, userParams);
        },
        async update(fields) {
            // eslint-disable-next-line @typescript-eslint/camelcase
            this.userModel.update(fields, { where: { user_id: this.id }  })
            return UserService(this.id, this.userModel, userParams);
        },
        async delete() {
            this.userModel.destroy();
        },
        toJSON() {
            return userParams;
        }
    }
}

