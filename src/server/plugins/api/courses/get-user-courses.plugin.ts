export const getUserCoursesPlugin = {
    name: 'getUserCoursesPlugin',
    version: '1.0.0',
    register: async function (server, options) {
        server.route({
            method: 'GET',
            path: '/api/courses/get-user-courses',
            options,
            handler: async (request, h) => {
                const { UserCourses } = await server.methods.getModels();

                try {
                    if (!request.auth.isAuthenticated) {
                        const res = h.response();
                        res.code(401);
                        return res;
                    }

                    const { userId } = request.auth.credentials;

                    const userCourses = await UserCourses.findAll({
                        where: {
                            user: userId
                        },
                        attributes: ['id', 'course']
                    });

                    let response;
                    if (userCourses) {
                        response = h.response(userCourses);
                        response.code(200);
                    } else {
                        response = h.response('Не удалось загрузить данные о курсах.');
                    }
                    return response
                } catch (error) {
                    const res = h.response('Не удалось загрузить данные о курсах. Попробуйте позднее.');
                    res.code(500);
                    return res;
                }
            }
        });
    }
}

