import React, { PureComponent } from 'react';
import { NavLink, RouteComponentProps, Switch, Route } from 'react-router-dom';

import { Logo } from 'Components/logo';

import { AdminBlogPageContainer } from 'Src/client/containers/admin-blog-page-container';
import { EditArticlePageContainer } from 'Containers/edit-article-page-container';
import { CreateArticlePageContainer } from 'Containers/create-article-page-container';
import { CoursesListContainer } from 'Containers/courses-list-container';
import { CreateCourseAdminPageContainer } from 'Containers/create-course-admin-page-container';

import styles from './admin-page.module.scss';


type Props = RouteComponentProps

export class AdminPage extends PureComponent<Props> {
    render(): any {
        const matchUrl = this.props.match.path;

        return (
            <div className={ styles.container }>
                <div className={ styles.sidebar }>
                    <Logo className={ styles.logo } type="white" />
                    <ul className={ styles.menu }>
                        <li>
                            <NavLink
                                to={ `${matchUrl}/blog` }
                                className={ styles.navLink }
                            >
                                Блог
                            </NavLink>
                            <NavLink
                                to={ `${matchUrl}/courses` }
                                className={ styles.navLink }
                            >
                                Курсы
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className={ styles.content }>
                    <Switch>
                        <Route
                            exact
                            path={ `${matchUrl}/blog` }
                            component={ AdminBlogPageContainer }
                        />
                        <Route
                            exact
                            path={ `${matchUrl}/blog/create` }
                            component={ CreateArticlePageContainer }
                        />
                        <Route
                            path={ `${matchUrl}/blog/edit/:post_id` }
                            component={ EditArticlePageContainer }
                        />
                        <Route
                            exact
                            path={ `${matchUrl}/courses` }
                            component={ CoursesListContainer }
                        />
                        <Route
                            exact
                            path={ `${matchUrl}/courses/create` }
                            component={ CreateCourseAdminPageContainer }
                        />
                    </Switch>
                </div>
            </div>
        );
    }
}
