import { Sequelize } from 'sequelize';
import { getAccountModel } from '../models/Account';
import { getUsersModel } from '../models/User';
import { getBlogPostModel } from '../models/BlogPost';
import { getCourseModel } from '../models/Course';

import { accountDefaults } from './defaults/accountDefaults';
import { userDefault } from './defaults/userDefault';
import { blogPostDefaults } from './defaults/blogPostDefaults';
import { courseDefaults } from './defaults/courseDefaults';

const connectionString = process.env.DATABASE_URL;

const DBConnection = new Sequelize(connectionString);
const AccountModel = getAccountModel(DBConnection);
const BlogPostModel = getBlogPostModel(DBConnection);
const CourseModel = getCourseModel(DBConnection);

const UserModel = getUsersModel(DBConnection);

AccountModel.sync({ force: true }).then(() => {
    // @ts-ignore
    AccountModel.create(accountDefaults);

    UserModel.sync({ force: true }).then(() => {
        // @ts-ignore
        UserModel.create(userDefault);
    })
})

BlogPostModel.sync({ force: true }).then(() => {
    // @ts-ignore
    BlogPostModel.create(blogPostDefaults);
});

CourseModel.sync({ force: true }).then(() => {
    // @ts-ignore
    CourseModel.create(courseDefaults);
});






