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
                const sequalizeInstance = await server.methods.getOrm();

                try {
                    let response;
                    await sequalizeInstance.transaction(async (t) => {
                        const courses = await Course.findAll({
                            include: [{ model: User, as: 'author' }],
                        });
                        if (courses) {
                            response = h.response(courses);
                            response.code(200);
                        } else {
                            response = h.response('Не удалось загрузить данные о курсах или данные отсутствуют.');
                            response.code(404);
                        }
                    });
                    return response;
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

