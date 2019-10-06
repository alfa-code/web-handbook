import React, { ReactNode } from 'react';

import styles from './input-simple.pcss';

interface Props {
    placeholder?: string,
    children?: any
}
interface State {}

export class InputSimple extends React.PureComponent<Props, State> {
    render(): ReactNode {
        const { placeholder } = this.props;

        return (
            <span className={ styles.inputSimple }>
                <input
                    type='text'
                    placeholder={ placeholder }
                />
            </span>
        );
    }
}
