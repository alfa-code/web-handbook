import React, { ReactNode } from 'react';

import * as eyeHideImage from 'Assets/icons/info-icons/eye-show.svg';
import * as eyeImage from 'Assets/icons/info-icons/eye-hide.svg';

import styles from './input-password.module.scss';

interface Props {
    placeholder?: string;
    children?: any;
    onChange?: Function;
    value?: any;
    touched?: boolean;
    error?: string;
    onBlur?: () => void;
    className?: string;
    size?: string;
    name?: string;
}
interface State {
    value: string;
    isHide: boolean;
}

export class InputPassword extends React.PureComponent<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value || '',
            isHide: true
        };
    }

    inputOnChange = (e) => {
        const { onChange } = this.props;
        const { value } = e.target;
        if (onChange) { onChange(value) }
        this.setState({ value });
    };

    handleShowPassword = () => {
        const { isHide } = this.state;

        this.setState({
            isHide: !isHide
        });
    };

    render(): ReactNode {
        const {
            placeholder,
            value: propsValue,
            error,
            touched,
            onBlur,
            className,
            size,
            name,
        } = this.props;

        const { value, isHide } = this.state;

        const isError = error && touched;

        return (
            <span className={ `${styles.inputSimple} ${className ? className : ''} ${styles[`${size}Width`]}` }>
                <input
                    type={ isHide ? 'password' : 'text' }
                    name={ name }
                    onChange={ this.inputOnChange }
                    value={ propsValue || value }
                    className={ `${styles.input} ${isError ? styles.inputError : ''}` }
                    onBlur={ onBlur }
                />
                <span className={ `${styles.label} ${(value ? styles.labelFilled : '')}` }>
                    { placeholder }
                </span>
                <button
                    type='button'
                    className={ styles.eye }
                    onClick={ this.handleShowPassword }
                >
                    <img
                        src={ isHide ? eyeImage : eyeHideImage }
                        alt='иконка статуса пароля (скрыт или показан)'
                    />
                </button>
                {isError && <span className={ styles.inputErrorLabel }>{error}</span>}
            </span>
        );
    }
}
