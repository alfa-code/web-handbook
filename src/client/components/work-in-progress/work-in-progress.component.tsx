import React, { Component } from 'react';

import { Props } from './props';

import styles from './work-in-progress.module.scss';

export class WorkInProgress extends Component<Props> {
    render() {
        return (
            <div>
                Мы еще работаем над этим...
            </div>
        );
    }
}
