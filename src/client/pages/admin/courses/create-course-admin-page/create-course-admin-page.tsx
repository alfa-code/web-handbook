import React, { PureComponent } from 'react';

import { Formik } from 'formik';

type Props = {
    createNewCourseDA: any;
};

export class CreateCourseAdminPage extends PureComponent<Props, any> {
    render() {
        const initialValues = {
            author_id: '1',
            image: '-',
            title: '-',
            short_description: '-',
            full_description: '',
            number_of_videos: '10',
            playlist_id: '1',
            video_time: '10',
        };
        const {
            createNewCourseDA
        } = this.props;

        return (
            <div>
                <h1>
                    Создание нового курса
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
                            createNewCourseDA(values);
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
                    }) => (
                        <form onSubmit={handleSubmit}>
                            <table>
                                <tbody>
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
                                            <input
                                                type="text"
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
                                            <input
                                                type="text"
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
                                </tbody>
                            </table>
                            <button type="submit" disabled={ isSubmitting }>
                                Создать новый курс
                            </button>
                        </form>
                    )}
                </Formik>
            </div>
        );
    }
}
