import { Sequelize } from 'sequelize';

import { accountDefaults } from './defaults/accountDefaults';
import { usersDefault } from './defaults/userDefault';
import { blogPostDefaults } from './defaults/blogPostDefaults';
import { courseDefaults } from './defaults/courseDefaults';
import { userCoursesDefault } from './defaults/userCoursesDefaults';
import { lessonDefaults_1, lessonDefaults_2 } from './defaults/lessonDefaults';
import { materialVideoDefaults_1, materialVideoDefaults_2 } from './defaults/materialVideoDefaults';
import { ormModels } from '../models';

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

const {
    Account,
    User,
    BlogPost,
    Course,
    UserCourses,
    Lesson,
    MaterialVideo
} = sequelizeInstance.models;

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

Lesson.sync({ force: true }).then(() => {
    // @ts-ignore
    Lesson.create(lessonDefaults_1);
    Lesson.create(lessonDefaults_2);
});

MaterialVideo.sync({ force: true }).then(() => {
    // @ts-ignore
    MaterialVideo.create(materialVideoDefaults_1);
    MaterialVideo.create(materialVideoDefaults_2);
});

UserCourses.sync({ force: true }).then(() => {
    userCoursesDefault.forEach(element => {
        UserCourses.create(element);
    });
});








