import { Sequelize } from 'sequelize';
import { getUserModel } from '../models/User';
import { userDefaults } from './defaults/userDefaults';

const connectionString = process.env.DATABASE_URL;

const DBConnection = new Sequelize(connectionString);
const UserModel = getUserModel(DBConnection);

UserModel.sync({force: true}).then(() => {
    // @ts-ignore
    UserModel.create(userDefaults);
})
