import React, { PureComponent } from 'react';

import { Logo } from 'Components/index';

import { Props } from './props';

import styles from './main.module.scss';
const { locals: classes } = styles as any;

export class Main extends PureComponent<Props> {
    render() {
        return (
            /* @ts-ignore */
            <div className={ classes.page }>
                <Logo />
            </div>
        );
    }
}
