import React, { PureComponent, ReactNode } from 'react'

interface Props {}
interface State {}

import styles from './header-navigation.pcss';

export class HeaderNavigation extends PureComponent<Props, State> {
    render(): ReactNode {
        return (
            <nav className={ styles.headerNavigation }>
                <ul>
                    <li>
                        Курсы
                    </li>
                    <li>
                        Блог
                    </li>
                    <li>
                        Html справочник
                    </li>
                    <li>
                        О нас
                    </li>
                </ul>
            </nav>
        )
    }
}
