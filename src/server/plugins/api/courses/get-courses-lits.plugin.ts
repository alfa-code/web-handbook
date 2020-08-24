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

export const getCoursesListPlugin = {
    name: 'getCoursesListPlugin',
    version: '1.0.0',
    register: async function (server, options) {
        server.route({
            method: 'GET',
            path: '/api/get-courses-list',
            options,
            handler: async (request, h) => {
                const { Course, User } = await server.methods.getModels();

                try {
                    const courses = await Course.findAll({
                        raw: true
                    });

                    const authors = await getAuthorsByCourses(User, courses);

                    const coursesExtended = courses.map((course, i) => {
                        if (authors && authors[i]) {
                            return {
                                ...course,
                                author: authors[i]
                            }
                        }
                        return course;
                    });

                    if (coursesExtended) {
                        const res = h.response(coursesExtended);
                        res.code(200);
                        return res;
                    } else {
                        const res = h.response('Не удалось загрузить данные о курсах или данные отсутствуют.');
                        res.code(404);
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

