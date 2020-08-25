import React, { PureComponent } from 'react';

import { Link } from 'react-router-dom';

type Props = {
};

// import styles from './courses-list.module.scss';

export class CoursesListPage extends PureComponent<Props, any> {
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
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
        );
    }
}
