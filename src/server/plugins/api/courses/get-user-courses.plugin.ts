async function extendsUserCourses(userCourses = [], courseModel) {
    const courses = userCourses.map(async course => {
        const { course_id } = course;

        const currentCourse = await courseModel.findOne({
            where: {
                id: course_id
            },
            // attributes: ['id', 'course'],
        });

        return {
            ...course.dataValues,
            courseInfo: {
                ...currentCourse.dataValues
            }
        }
    });
    return Promise.all(courses);
}

export const getUserCoursesPlugin = {
    name: 'getUserCoursesPlugin',
    version: '1.0.0',
    register: async function (server, options) {
        server.route({
            method: 'GET',
            path: '/api/courses/get-user-courses',
            options,
            handler: async (request, h) => {
                const { UserCourses, Course } = await server.methods.getModels();
                const sequalizeInstance = await server.methods.getOrm();

                try {
                    if (!request.auth.isAuthenticated) {
                        const res = h.response();
                        res.code(401);
                        return res;
                    }

                    const { userId } = request.auth.credentials;

                    console.log('userId', userId)

                    let response;
                    await sequalizeInstance.transaction(async () => {
                        const userCourses = await UserCourses.findAll({
                            where: {
                                user_id: userId
                            },
                            attributes: ['id', 'course_id'],
                        });

                        const extendedUserCourses = await extendsUserCourses(userCourses, Course);

                        if (extendedUserCourses) {
                            response = h.response(extendedUserCourses);
                        } else {
                            response = h.response('Не удалось загрузить данные о курсах.');
                        }

                    });
                    return response;
                } catch (error) {
                    console.log('error', error)
                    const res = h.response('Не удалось загрузить данные о курсах. Попробуйте позднее.');
                    res.code(500);
                    return res;
                }
            }
        });
    }
}

