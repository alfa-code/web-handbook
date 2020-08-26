export const saveEditedCoursePlugin = {
    name: 'saveEditedCoursePlugin',
    version: '1.0.0',
    register: async function (server, options) {
        server.route({
            method: 'PUT',
            path: '/api/courses/save-edited-course/{courseId}',
            options,
            handler: async (request, h) => {
                const { Course } = await server.methods.getModels();

                try {
                    const { courseId } = request.params;

                    const updatedCourse = await Course.update(request.payload, {
                        where: {
                            id: courseId
                        },
                        fields: [
                            'author_id',
                            'image',
                            'title',
                            'short_description',
                            'full_description',
                            'number_of_videos',
                            'playlist_id',
                            'video_time'
                        ]
                    });

                    if (updatedCourse) {
                        const res = h.response('Курс успешно обновлен!');
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

