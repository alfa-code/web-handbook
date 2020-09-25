import { idea } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const createNewUserCoursePlugin = {
    name: 'createNewUserCoursePlugin',
    version: '1.0.0',
    register: async function (server, options) {
        server.route({
            method: 'POST',
            path: '/api/courses/create-user-course',
            options,
            handler: async (request, h) => {
                const { UserCourses } = await server.methods.getModels();

                const { id: courseId } = request.payload;

                const fields = {
                    user_id: request.auth.credentials.userId,
                    course_id: courseId,
                    active_lesson: 1,
                    is_finished: false
                }

                try {
                    const createdUserCourse = await UserCourses.create(fields);

                    if (createdUserCourse && createdUserCourse.course_id) {
                        const res = h.response({ startedCourseId: createdUserCourse.course_id });
                        res.code(201);
                        return res;
                    } else {
                        const res = h.response('Что то пошло не так. Попробуйте позднее.');
                        res.code(500);
                        return res;
                    }
                } catch (error) {
                    console.log('error', error);
                    const res = h.response('Не удалось начать новый курс. Попробуйте позднее.');
                    res.code(500);
                    return res;
                }
            }
        });
    }
}

