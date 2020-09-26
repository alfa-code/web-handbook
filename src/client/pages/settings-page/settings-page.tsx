import React, { PureComponent, ReactNode } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { Switch, Route, RouteComponentProps } from 'react-router-dom';

import { PageContainer } from 'Components/page-container';

import { ChangePasswordPage } from 'Pages/change-password-page';

import { UserSettingsPageContainer } from 'Containers/user-settings-page-container';
import { CabinetPageContainer } from 'Containers/cabinet-page-container';


// Данный функционал спорный - займемся им потом
// import { ChangeEmailPage } from 'Pages/change-email-page';

type Props = RouteComponentProps
interface State { }

import styles from './settings-page.module.scss';

export class SettingsPage extends PureComponent<Props, State> {
    render(): ReactNode {
        const matchUrl = this.props.match.path;

        return (
            <>
                <PageContainer paddingsOnPhone={ true }>
                    <div className={ styles.rootContainer }>
                        <ul className={ styles.menuList }>
                            <li>
                                <NavLink
                                    to='/profile/cabinet'
                                    className={ styles.menuLink }
                                    activeClassName={ styles.menuLinkSelected }
                                >
                                    Личный кабинет
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/profile/tools'
                                    className={ styles.menuLink }
                                    activeClassName={ styles.menuLinkSelected }
                                >
                                    Настройки
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/profile/password'
                                    className={ styles.menuLink }
                                    activeClassName={ styles.menuLinkSelected }
                                >
                                    Сменить пароль
                                </NavLink>
                            </li>
                            { /* Данный функционал спорный - займемся им потом */ }
                            {/* <li>
                                <NavLink
                                    to='/profile/email'
                                    className={ styles.menuLink }
                                    activeClassName={ styles.menuLinkSelected }
                                >
                                    Сменить email
                                </NavLink>
                            </li> */}
                        </ul>
                        <div className={ styles.contentSection }>
                            <Switch>
                                <Route exact path={ matchUrl }>
                                    <Redirect to={ `${matchUrl}/cabinet` } />
                                </Route>
                                <Route
                                    path={ `${matchUrl}/cabinet` }
                                    component={ CabinetPageContainer }
                                />
                                <Route
                                    path={ `${matchUrl}/tools` }
                                    component={ UserSettingsPageContainer }
                                />
                                <Route
                                    path={ `${matchUrl}/password` }
                                    component={ ChangePasswordPage }

                                />
                                { /* Данный функционал спорный - займемся им потом */ }
                                {/* <Route
                                    path={ `${matchUrl}/email` }
                                    component={ ChangeEmailPage }
                                /> */}
                            </Switch>
                        </div>
                    </div>
                </PageContainer>
            </>
        );
    }
}
