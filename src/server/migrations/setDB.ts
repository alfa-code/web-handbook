import { Sequelize } from 'sequelize';
import { getAccountModel } from '../models/Account';
import { getUsersModel } from '../models/User';
import { getBlogPostModel } from '../models/BlogPost';

import { accountDefaults } from './defaults/accountDefaults';
import { userDefault } from './defaults/userDefault';
import { blogPostDefaults } from './defaults/blogPostDefaults';

const connectionString = process.env.DATABASE_URL;

const DBConnection = new Sequelize(connectionString);
const AccountModel = getAccountModel(DBConnection);
const BlogPostModel = getBlogPostModel(DBConnection);

const UserModel = getUsersModel(DBConnection, AccountModel);

AccountModel.sync({force: true}).then(() => {
    // @ts-ignore
    AccountModel.create(accountDefaults);

    UserModel.sync({ force: true }).then(() => {
        // @ts-ignore
        UserModel.create(userDefault);
    })
})

BlogPostModel.sync({force: true}).then(() => {
    // @ts-ignore
    BlogPostModel.create(blogPostDefaults);
});






