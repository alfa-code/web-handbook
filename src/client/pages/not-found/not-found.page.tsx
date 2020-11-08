import React, { PureComponent } from 'react';

import { Link } from "react-router-dom";

import { Props } from './props';

import styles from './not-found.module.scss';
const { locals: classes } = styles as any;

export class NotFound extends PureComponent<Props> {
    render() {
        return (
            <div className={ classes.page }>
                Страница не найдена. &nbsp;
                <Link to="/">Вернуться на главную</Link>
            </div>
        );
    }
}
