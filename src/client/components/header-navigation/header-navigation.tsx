import React, { PureComponent, ReactNode } from 'react';
import { Link } from 'react-router-dom';

import styles from './header-navigation.module.scss';

interface Props { }
interface State { }

export class HeaderNavigation extends PureComponent<Props, State> {
    render(): ReactNode {
        return (
            <nav className={ `${styles.headerNavigation}` }>
                <ul>
                    <li>
                        <Link to='/courses'>
                            Курсы
                        </Link>
                    </li>
                    <li>
                        <Link to='/blog'>
                            Блог
                        </Link>
                    </li>
                    <li>
                        <Link to='/' className='disabled'>
                            Html справочник
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    }
}
