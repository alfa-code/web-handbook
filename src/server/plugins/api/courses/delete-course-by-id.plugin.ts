export const deleteCourseById = {
    name: 'deleteCourseById',
    version: '1.0.0',
    register: async function (server, options) {
        server.route({
            method: 'DELETE',
            path: '/api/courses/delete/{courseId}',
            options,
            handler: async (request, h) => {
                const { Course } = await server.methods.getModels();

                const { courseId } = request.params;
                console.log('courseId', courseId)

                try {
                    const result = await Course.destroy({
                        where: { id: courseId }
                    });

                    if (result) {
                        const res = h.response(`Курс с id ${courseId} - удален успешно`);
                        res.code(200);
                        return res;
                    } else {
                        const res = h.response(`Не удалось удалить курс с id ${courseId}`);
                        res.code(418);
                        return res;
                    }
                } catch (error) {
                    const res = h.response(`Ошибка сервера`);
                    res.code(500);
                    return res;
                }
            }
        });
    }
}

