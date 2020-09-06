import { IUserService } from './UserService';
import { NotFoundError } from 'Src/server/utils/errors/types';
import { Shape } from 'Types/objects';
import { IAsyncService } from 'Types/service';
import { ModelType } from 'sequelize';
import { EndService } from './EndService';

export type IUserCoursesService = IAsyncService & {
    id: number;
    model: ModelType;
    data: Shape<any>;
}

export type IUserCoursesServiceCollection = IAsyncService & {
    id: number;
    model: ModelType;
    data: Shape<any>[];
}

export async function UserCoursesService(
    id: number,
    UserCoursesModel: any,
    initData: Shape<any> = null
): Promise<IUserCoursesService> {
    let data = initData;
    const requestSelector = { where: { id } };

    if (id && !initData) {
        const result = await UserCoursesModel.findOne(requestSelector);
        data = result?.dataValues;

        if (!data) {
            throw new NotFoundError('UserCoursesService Service');
        }
    }

    return {
        id,
        data,
        model: UserCoursesModel,
        async map(fn) {
            return await fn(UserCoursesService(this.id, this.model, this.data))
        },
        async create(fields) {
            await this.model.create(fields);
            return await this.map(service => service);
        },
        async update(fields) {
            await this.model.update(fields, requestSelector);
            return await this.map(service => service);
        },
        async delete() {
            await this.model.destroy(requestSelector);
            return EndService.success();
        },
        toJSON() {
            return data;
        }
    }
}

export async function UserCoursesCollection(
    userService: IUserService | number,
    courseId: string,
    UserCoursesModel: any,
    initData: Shape<any> = null
): Promise<IUserCoursesServiceCollection> {
    let data = initData;
    const currentId = typeof userService === 'number' ? userService : userService.id;
    const byUserSelector = userService ? { id: currentId } : {};
    const byCourseSelector = courseId ? { course: courseId } : {};
    const requestSelector = { ...byUserSelector, ...byCourseSelector };

    if (!initData) {
        const result = await UserCoursesModel.findAll({ where: requestSelector });
        data = result;

        if (!data) {
            throw new NotFoundError('UserCoursesCollection Service');
        }
    }

    return {
        id: currentId,
        courseId,
        model: UserCoursesModel,
        data,
        async map(fn) {
            return await fn(UserCoursesCollection(this.id, this.courseId, this.model, this.data))
        },
        async create() {
            return UserCoursesService(null, this.model);
        },
        async update(fields) {
            await this.model.update(fields, { where: requestSelector });
            return this.map(service => service);
        },
        async delete() {
            await this.model.destroy({ where: requestSelector });
            return EndService.success();
        },
        toJSON() {
            return data;
        }
    }

}
