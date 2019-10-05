import React, { PureComponent, ReactNode } from 'react'

type Props = {
    text: string;
}

import styles from './button-style.pcss';

export class Button extends PureComponent<Props> {
    constructor(props: Props) {
        super(props)

        this.state = {

        }
    }

    render(): ReactNode {
        return (
            <button className={ `${styles.button} ${styles.buttonSecondary}` }>
                { this.props.text }
            </button>
        )
    }
}

