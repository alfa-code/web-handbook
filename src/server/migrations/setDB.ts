import { Sequelize } from 'sequelize';
import { getUserModel } from '../models/User';
import { getBlogPostModel } from '../models/BlogPost';
import { userDefaults } from './defaults/userDefaults';
import { blogPostDefaults } from './defaults/blogPostDefaults';

const connectionString = process.env.DATABASE_URL;

const DBConnection = new Sequelize(connectionString);
const UserModel = getUserModel(DBConnection);
const BlogPostModel = getBlogPostModel(DBConnection);

UserModel.sync({force: true}).then(() => {
    // @ts-ignore
    UserModel.create(userDefaults);
});

BlogPostModel.sync({force: true}).then(() => {
    // @ts-ignore
    BlogPostModel.create(blogPostDefaults);
});

