import { SERVER_ENDPOINTS } from 'Constants/endpoints';

async function extendsUserCourses(userCourses = [], Course, Lesson, MaterialVideo) {
    const courses = userCourses.map(async course => {
        const { course_id } = course;

        const currentCourse = await Course.findOne({
            where: {
                id: course_id
            },
        });

        const lessons = await Lesson.findAll({
            where: {
                course_id: course_id
            },
        });

        let lessonsWithMaterialsResolved;
        if (lessons && lessons.length !== 0) {
            const lessonsWithMaterials = lessons.map(async (lesson) => {
                let materialVideo;
                if (lesson.video_is_presented) {
                    materialVideo = await MaterialVideo.findOne({
                        where: {
                            id: lesson.video_material_id
                        },
                        attributes: ['id', 'link'],
                    });
                    console.log('materialVideo', materialVideo)
                }
                console.log('lesson.video_is_presented', lesson.video_is_presented)
                console.log('lesson.video_is_required', lesson.video_is_required)
                console.log('video_material_id', lesson.video_material_id)

                return {
                    ...lesson.dataValues,
                    materials: {
                        video: {
                            ...materialVideo.dataValues
                        }
                    }
                }
            });

            lessonsWithMaterialsResolved = await Promise.all(lessonsWithMaterials);
            console.log('lessonsWithMaterialsResolved', lessonsWithMaterialsResolved)
        }

        return {
            ...course.dataValues,
            courseInfo: {
                ...currentCourse.dataValues
            },
            lessons: lessonsWithMaterialsResolved
            // lessons
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
            path: SERVER_ENDPOINTS.getUserCourses,
            options,
            handler: async (request, h) => {
                const { UserCourses, Course, Lesson, MaterialVideo } = await server.methods.getModels();
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
                            attributes: ['id', 'course_id', 'active_lesson', 'is_finished'],
                        });

                        const extendedUserCourses = await extendsUserCourses(userCourses, Course, Lesson, MaterialVideo);

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

