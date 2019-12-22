import React, { ReactNode } from 'react';

import * as eyeHideImage from 'Assets/icons/info-icons/eye-show.svg';
import * as eyeImage from 'Assets/icons/info-icons/eye-hide.svg';

import styles from './input-password.module.scss';

interface Props {
    placeholder?: string;
    children?: any;
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
        this.setState({ value: e.target.value });
    }

    handleShowPassword = () => {
        const { isHide } = this.state;

        this.setState({
            isHide: !isHide
        });
    }

    render(): ReactNode {
        const { placeholder } = this.props;
        const { value, isHide } = this.state;

        return (
            <span className={ styles.inputSimple }>
                <input
                    type={ isHide ? 'password' : 'text' }
                    onChange={ this.inputOnChange }
                    value={ value }
                    className={ styles.input }
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
                        alt='Главная иллюстрация'
                    />
                </button>
            </span>
        );
    }
}