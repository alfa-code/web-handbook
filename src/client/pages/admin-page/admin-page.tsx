import React, { PureComponent } from 'react';
import { NavLink, RouteComponentProps, Switch, Route } from 'react-router-dom';

import { AdminBlogPageContainer } from 'Src/client/containers/admin-blog-page-container';
import { CreateArticlePage } from 'Src/client/pages/admin/blog/create-article-page';
import { UpdateArticlePage } from 'Src/client/pages/admin/blog/update-article-page';

import styles from './admin-page.module.scss';

const coursesComponent = () => {
    return (
        <div>
            courses
        </div>
    )
}

interface Props extends RouteComponentProps { }

export class AdminPage extends PureComponent<Props> {
    render(): any {
        const matchUrl = this.props.match.path;

        return (
            <div className={ styles.container }>
                <div className={ styles.sidebar }>
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
                            component={ CreateArticlePage }
                        />
                        <Route
                            path={ `${matchUrl}/blog/edit/:post_id` }
                            component={ UpdateArticlePage }
                        />
                        <Route
                            exact
                            path={ `${matchUrl}/courses` }
                            component={ coursesComponent }
                        />
                    </Switch>
                </div>
            </div>
        );
    }
}
