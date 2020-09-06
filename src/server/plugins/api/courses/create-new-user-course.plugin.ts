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
                    user: request.auth.credentials.userId,
                    course: courseId
                }

                try {
                    const createdUserCourse = await UserCourses.create(fields);
                    console.log('createdUserCourse', createdUserCourse)

                    if (createdUserCourse) {
                        const res = h.response('Поздравляем! Вы начали новый курс.');
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

