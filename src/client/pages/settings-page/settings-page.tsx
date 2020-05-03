import React, { PureComponent, ReactNode } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { Switch, Route, RouteComponentProps } from 'react-router-dom';

import { PageFrame } from 'Components/page-frame';
import { PageContainer } from 'Components/page-container';

import { SettingsBlock } from 'Blocks/settings-block';

interface Props extends RouteComponentProps { }
interface State { }

import styles from './settings-page.module.scss';

export class SettingsPage extends PureComponent<Props, State> {
    render(): ReactNode {
        const matchUrl = this.props.match.path;

        return (
            <PageFrame>
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
                            <li>
                                <NavLink
                                    to='/profile/email'
                                    className={ styles.menuLink }
                                    activeClassName={ styles.menuLinkSelected }
                                >
                                    Сменить email
                                </NavLink>
                            </li>
                        </ul>
                        <div>
                        <Switch>
                            <Route exact path={ matchUrl }>
                                <Redirect to={ `${matchUrl}/cabinet` } />
                            </Route>
                            <Route
                                path={ `${matchUrl}/cabinet` }
                                component={ SettingsBlock }
                            />
                            <Route
                                path={ `${matchUrl}/tools` }
                                component={ SettingsBlock }
                            />
                            <Route
                                path={ `${matchUrl}/password` }
                                component={ SettingsBlock }

                            />
                            <Route
                                path={ `${matchUrl}/email` }
                                component={ SettingsBlock }
                            />
                        </Switch>
                        </div>
                    </div>
                </PageContainer>
            </PageFrame>
        );
    }
}
