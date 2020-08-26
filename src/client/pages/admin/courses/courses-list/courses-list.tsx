import React, { PureComponent } from 'react';

import { Link } from 'react-router-dom';

type Props = {
    coursesList: any;
    getCoursesListStartDA: any;
    deleteCourseByIdDA: any;
};

// import styles from './courses-list.module.scss';

export class CoursesListPage extends PureComponent<Props, any> {
    componentDidMount() {
        const { getCoursesListStartDA } = this.props;
        getCoursesListStartDA();
    }

    deleteCourse = (courseId) => {
        const { deleteCourseByIdDA } = this.props;
        const isNeedDelete = confirm(`Вы точно хотите удалить курс с id ${courseId}?`);
        if (isNeedDelete) {
            deleteCourseByIdDA(courseId);
        }
    }

    getCoursesTable = () => {
        const { coursesList = [] } = this.props;
        console.log('coursesList', coursesList);

        return coursesList.map((course) => {
                return (
                    <tr key={ course.id }>
                        <td>
                            { course.id }
                        </td>
                        <td>
                            { course.title }
                        </td>
                        <td>
                            <Link to={ `/admin/courses/edit/${course.id}` }>
                                Редактировать
                            </Link>
                        </td>
                        <td>
                            <button onClick={ () => { this.deleteCourse(course.id) } }>
                                Удалить курс
                            </button>
                        </td>
                    </tr>
                );
            }
        )
    }

    render() {
        return (
            <div>
                <Link to='/admin/courses/create'>
                    Новый курс
                </Link>
                <br/>
                <br/>
                <table>
                    <thead>
                        <tr>
                            <td>
                                id курса
                            </td>
                            <td>
                                заголовок курса
                            </td>
                            <td />
                        </tr>
                    </thead>
                    <tbody>
                        { this.getCoursesTable() }
                    </tbody>
                </table>
            </div>
        );
    }
}
