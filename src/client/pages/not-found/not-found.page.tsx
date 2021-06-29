import React, { PureComponent } from 'react';

import { Link } from "react-router-dom";

import { Props } from './props';

import styles from './not-found.module.scss';

export class NotFound extends PureComponent<Props> {
    render() {
        return (
            <div className={ styles.page }>
                Такой страницы не существует. &nbsp;
                <Link to="/">Вернуться на главную</Link>
            </div>
        );
    }
}
