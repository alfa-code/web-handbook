import { getAccountModel } from 'Src/server/models/Account';
import { getUsersModel } from 'Src/server/models/User';
import { getBlogPostModel } from 'Src/server/models/BlogPost';
import { getCourseModel } from 'Src/server/models/Course';
import { getUserCoursesModel } from 'Src/server/models/UserCourses';

export const ormModels = [
    getAccountModel,
    getUsersModel,
    getBlogPostModel,
    getCourseModel,
    getUserCoursesModel
];
