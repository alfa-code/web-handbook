import React, { PureComponent } from 'react';

import { Logo } from 'Components/index';

import { Props } from './props';

import styles from './main.module.scss';

export class Main extends PureComponent<Props> {
    render() {
        return (
            <div className={ styles.page }>
                <Logo />
            </div>
        );
    }
}
