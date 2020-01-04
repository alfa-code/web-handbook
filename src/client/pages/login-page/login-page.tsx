import React, { PureComponent } from 'react';

import { Button } from 'Src/client/components/button';
import { InputSimple } from 'Src/client/components/input-simple';
import { InputPassword } from 'Src/client/components/input-password';
import { Logo } from 'Src/client/components/logo';
import { ModalForm } from 'Src/client/components/modal-form';

import styles from './login-page-style.module.scss';

interface Props {}
interface State {
    isRegistartion: boolean;
}

export class LoginPage extends PureComponent<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            isRegistartion: true
        };
    }

    handleSwitchButton = (e) => {
        const { isRegistartion } = this.state;

        if (e.target.id === 'registartion') {
            if (!isRegistartion) {
                this.setState({ isRegistartion: true });
            }
        } else if (isRegistartion) {
            this.setState({ isRegistartion: false });
        }
    }

    render(): any {
        const { isRegistartion } = this.state;

        return (
            <div className={ styles.loginPage }>
                <Logo />
                <ModalForm>
                    <div className={ styles.loginSwitchButton }>
                        <button
                            type='button'
                            id='registartion'
                            className={ isRegistartion && styles.active }
                            onClick={ this.handleSwitchButton }
                        >
                            Регистрация
                        </button>
                        <button
                            type='button'
                            id='login'
                            className={ !isRegistartion && styles.active }
                            onClick={ this.handleSwitchButton }
                        >
                            Вход
                        </button>
                    </div>
                    <div className={ styles.loginForm }>
                        <InputSimple
                            placeholder='Введите ваш email'
                        />
                        <InputPassword
                            placeholder='Придумайте пароль'
                        />
                        <Button
                            viewType='primary'
                            text={ isRegistartion ? 'Зерегистрироваться' : 'Вход' }
                        />
                    </div>
                </ModalForm>
            </div>
        );
    }
}

