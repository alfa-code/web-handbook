// create-new-course.plugin.ts
async function getAuthorsByCourses(UserModel, coursesArray) {
    const authorsPromises = coursesArray.map(async (course) => {
        const author = await UserModel.findOne({
            raw: true,
            where: { user_id: course.author_id }
        });
        return author;
    });

    return Promise.all(authorsPromises);
}

export const createNewCoursePlugin = {
    name: 'createNewCoursePlugin',
    version: '1.0.0',
    register: async function (server, options) {
        server.route({
            method: 'POST',
            path: '/api/create-new-course',
            options,
            handler: async (request, h) => {
                const { Course } = await server.methods.getModels();

                try {
                    const createdCourse = await Course.create(request.payload);

                    if (createdCourse) {
                        const res = h.response('Курс создан!');
                        res.code(200);
                        return res;
                    }
                } catch (error) {
                    console.log('error', error);
                    const res = h.response('Не удалось загрузить данные о курсах. Попробуйте позднее.');
                    res.code(500);
                    return res;
                }
            }
        });
    }
}

