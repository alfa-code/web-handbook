import { getAccountModel } from 'Src/server/models/Account';
import { getUsersModel } from 'Src/server/models/User';
import { getBlogPostModel } from 'Src/server/models/BlogPost';
import { getCourseModel } from 'Src/server/models/Course';

export const ormModels = [
    getAccountModel,
    getUsersModel,
    getBlogPostModel,
    getCourseModel
];
