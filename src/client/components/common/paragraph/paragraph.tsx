import React, { Component } from 'react';
import classNames from 'classnames';

import styles from './paragraph.pcss';

interface Props {
    text?: string,
    className?: string;
}

export class Paragraph extends Component<Props> {
    render() {
        const { text, children, className } = this.props;

        return (
            <p className={ classNames(styles.paragraph, className) }>
                { text || children }
            </p>
        );
    }
}
