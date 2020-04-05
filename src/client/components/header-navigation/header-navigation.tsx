import React, { PureComponent, ReactNode } from 'react';
import { Link } from 'react-router-dom';

import styles from './header-navigation.module.scss';

interface Props { }
interface State { }

export class HeaderNavigation extends PureComponent<Props, State> {
    render(): ReactNode {
        return (
            <nav className={styles.headerNavigation}>
                <ul>
                    <li>
                        <Link to='/'>
                            Курсы
                        </Link>
                    </li>
                    <li>
                        <Link to='/'>
                            Блог
                        </Link>
                    </li>
                    <li>
                        <Link to='/'>
                            Html справочник
                        </Link>
                    </li>
                    <li>
                        <Link to='/'>
                            О нас
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    }
}
