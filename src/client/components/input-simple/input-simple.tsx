import React, { ReactNode } from 'react';

import styles from './input-simple.module.scss';

interface Props {
    placeholder?: string;
    children?: any;
    onChange?: Function;
    value?: any;
    touched?: boolean;
    error?: string;
    onBlur?: () => void;
    className?: string;
    name?: string;
    size?: string;
}

interface State {
    value: string;
}

export class InputSimple extends React.PureComponent<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value || ''
        };
    }

    inputOnChange = (e) => {
        const { onChange } = this.props;
        const { value } = e.target;

        if (onChange) {
            onChange(value, e)
        }

        this.setState({ value });
    };

    render(): ReactNode {
        const {
            placeholder,
            value: propsValue,
            error,
            touched,
            onBlur,
            size,
            name,
            className
        } = this.props;

        const { value } = this.state;

        const isError = error && touched;

        return (
            <span className={ `${ styles.inputSimple } ${ className ? className : '' } ${ styles[`${ size }Width`] }` }>
                <input
                    type="text"
                    onChange={ this.inputOnChange }
                    onBlur={ onBlur }
                    name={ name }
                    value={ propsValue || value }
                    className={ `${ styles.input } ${ isError ? styles.inputError : '' }` }
                />
                <span className={ `${ styles.label } ${ (value ? styles.labelFilled : '') }` }>
                  { placeholder }
                </span>
                { isError && <span className={ styles.inputErrorLabel }>{ error }</span> }
        </span>
        );
    }
}
