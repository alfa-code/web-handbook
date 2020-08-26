import React, { Component } from 'react';
import { Formik } from 'formik';

interface Props {
    currentCourse: any;
    saveEditedCourseDA: any;
}

export class EditCourseAdminPage extends Component<Props> {
    render() {
        const { currentCourse, saveEditedCourseDA } = this.props;

        if (!currentCourse.id) {
            return null;
        }

        const initialValues = {
            id: currentCourse.id,
            author_id: currentCourse.author_id,
            image: currentCourse.image,
            title: currentCourse.title,
            short_description: currentCourse.short_description,
            full_description: currentCourse.short_description,
            number_of_videos: currentCourse.number_of_videos,
            playlist_id: currentCourse.playlist_id,
            video_time: currentCourse.video_time,
        };

        return (
            <div>
                <h1>
                    Редактирование курса
                </h1>
                <Formik
                    initialValues={ initialValues }
                    validate={values => {
                        const errors: any = {};
                        if (!values.image) {
                            errors.image = 'Required';
                        }
                        if (!values.title) {
                            errors.title = 'Required';
                        }

                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            saveEditedCourseDA(values);
                            setSubmitting(false);
                        }, 400);
                    }}
                    >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                    }) => {
                        return (
                            <form onSubmit={handleSubmit}>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>
                                                id курса
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    name="author_id"
                                                    id="author_id"
                                                    disabled={ true }
                                                    value={values.id}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label htmlFor="author_id">author_id</label>
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    name="author_id"
                                                    id="author_id"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.author_id}
                                                />
                                            </td>
                                            <td>
                                                {errors.author_id && touched.author_id && errors.author_id}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label htmlFor="image">image</label>
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    name="image"
                                                    id="image"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.image}
                                                />
                                            </td>
                                            <td>
                                                {errors.image && touched.image && errors.image}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label htmlFor="title">title</label>
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    name="title"
                                                    id="title"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.title}
                                                />
                                            </td>
                                            <td>
                                                {errors.title && touched.title && errors.title}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label htmlFor="short_description">short_description</label>
                                            </td>
                                            <td>
                                                <textarea
                                                    rows={ 10 }
                                                    cols={ 45 }
                                                    name="short_description"
                                                    id="short_description"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.short_description}
                                                />
                                            </td>
                                            <td>
                                                {errors.short_description && touched.short_description && errors.short_description}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label htmlFor="full_description">full_description</label>
                                            </td>
                                            <td>
                                                <textarea
                                                    rows={ 10 }
                                                    cols={ 45 }
                                                    name="full_description"
                                                    id="full_description"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.full_description}
                                                />
                                            </td>
                                            <td>
                                                {errors.full_description && touched.full_description && errors.full_description}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label htmlFor="number_of_videos">number_of_videos</label>
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    name="number_of_videos"
                                                    id="number_of_videos"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.number_of_videos}
                                                />
                                            </td>
                                            <td>
                                                {errors.number_of_videos && touched.number_of_videos && errors.number_of_videos}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label htmlFor="playlist_id">playlist_id</label>
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    name="playlist_id"
                                                    id="playlist_id"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.playlist_id}
                                                />
                                            </td>
                                            <td>
                                                {errors.playlist_id && touched.playlist_id && errors.playlist_id}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label htmlFor="video_time">video_time</label>
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    name="video_time"
                                                    id="video_time"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.video_time}
                                                />
                                            </td>
                                            <td>
                                                {errors.video_time && touched.video_time && errors.video_time}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <button type="submit" disabled={ isSubmitting }>
                                    Сохранить изменение
                                </button>
                            </form>
                        )
                    }}
                </Formik>
            </div>
        )
    }
}
