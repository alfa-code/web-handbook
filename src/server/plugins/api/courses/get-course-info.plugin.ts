export const getCourseInfoPlugin = {
    name: 'getCourseInfoPlugin',
    version: '1.0.0',
    register: async function (server, options) {
        server.route({
            method: 'GET',
            path: '/api/get-course-info/{courseId}',
            options,
            handler: async (request, h) => {
                try {
                    const { courseId } = request.params;

                    if (!courseId) {
                        const res = h.response('ID курса в запросе обязателен!');
                        res.code(400);
                        return res;
                    }

                    const { Course } = await server.methods.getModels();

                    const course = await Course.findOne({
                        where: { id: courseId },
                        raw: true
                    });

                    if (course) {
                        const res = h.response(course);
                        res.code(200);
                        return res;
                    } else {
                        const res = h.response('Данные не были найдены!');
                        res.code(404);
                        return res;
                    }
                } catch (e) {
                    const res = h.response('Ошибка сервера.');
                    res.code(500);
                    return res;
                }

            }
        });
    }
}

