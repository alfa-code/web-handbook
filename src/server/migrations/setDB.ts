import { Sequelize } from 'sequelize';

import { accountDefaults } from './defaults/accountDefaults';
import { usersDefault } from './defaults/userDefault';
import { blogPostDefaults } from './defaults/blogPostDefaults';
import { courseDefaults } from './defaults/courseDefaults';
import { ormModels } from '../models'

const connectionString = process.env.DATABASE_URL;

const sequelizeInstance = new Sequelize(connectionString);

const modelList: any = {};
ormModels.forEach((model) => {
    const modelInstance = model(sequelizeInstance);
    const modelName = modelInstance.name;

    modelList[modelName] = modelInstance;
})

for (const key in modelList) {
    const currentModel = modelList[key];
    if (currentModel.associate) {
        // @ts-ignore
        currentModel.associate(sequelizeInstance, currentModel);
    }
}

const { Account, User, BlogPost, Course } = sequelizeInstance.models;

Account.sync({ force: true }).then(() => {
    accountDefaults.forEach(element => {
        Account.create(element);
    });

    User.sync({ force: true }).then(() => {
        usersDefault.forEach(element => {
            User.create(element);
        });
    })
})

BlogPost.sync({ force: true }).then(() => {
    // @ts-ignore
    BlogPost.create(blogPostDefaults);
});

Course.sync({ force: true }).then(() => {
    // @ts-ignore
    Course.create(courseDefaults);
});






