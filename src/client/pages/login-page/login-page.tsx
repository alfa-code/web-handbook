import React, { PureComponent, ReactElement } from 'react';

import { Form, Field } from 'react-final-form';
import { toast } from 'react-toastify';

import { Button } from 'Src/client/components/button';
import { InputSimple } from 'Src/client/components/input-simple';
import { InputPassword } from 'Src/client/components/input-password';
import { Logo } from 'Src/client/components/logo';
import { ModalForm } from 'Src/client/components/modal-form';

import styles from './login-page-style.module.scss';


type FormValues = {
    login?: string;
    password?: string;
}

async function LogIn(values) {
    const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
        redirect: 'manual'
    });

    const jsonResponseData = await response.json();

    if (response.ok && jsonResponseData.redirectTo) {
        toast.success(jsonResponseData.message);

        setTimeout(() => {
            window.location.href = jsonResponseData.redirectTo;
        }, 2000);
    } else {
        toast.error(jsonResponseData.message);
    }
}

async function registration(values) {
    const response = await fetch('/api/auth/registration', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
        redirect: 'follow'
    });

    const jsonResponseData = await response.json();

    if (response.ok && jsonResponseData.redirectTo) {
        toast.success(jsonResponseData.message);
        setTimeout(() => {
            window.location.href = jsonResponseData.redirectTo;
        }, 2000);
    } else {
        toast.error(jsonResponseData.message);
    }
}

function authForm(buttonText: string, isRegistartion: boolean): ReactElement {
    const onSubmit = async (values: FormValues): Promise<void> => {
        if (isRegistartion) {
            registration(values);
        } else {
            LogIn(values);
        }
    }

    const validateForm = (values): any => {
        const { login, password } = values;
        const emailRegExp = new RegExp('[^@]+@[^.]+..+');
        const passwordRegExp = new RegExp('[0-9a-zA-Z]{6,}');

        const errors = {
            login: !login ? 'Поле обязательное' : (emailRegExp.test(login) ? undefined : 'Введите корректный Email'),
            password: !password ? 'Поле обязательное' : (passwordRegExp.test(password) ? undefined : 'Пароль должен состоять минимум из 6 знаков')
        };

        return errors;
    }

    return (
        <div>
            <Form
                onSubmit={ onSubmit }
                validate={ validateForm }
                render={({ handleSubmit }): ReactElement => (
                    <form onSubmit={handleSubmit} className={styles.loginForm}>
                        <Field name='login'>
                            {
                                (props: any): ReactElement => {
                                    const { input, meta } = props;
                                    return (
                                        <div>
                                            <InputSimple
                                                value={input.value}
                                                onChange={input.onChange}
                                                placeholder='Введите email'
                                                touched={ meta.touched }
                                                error={ meta.error }
                                                onBlur={input.onBlur}
                                                className={ styles.inputAvailableWidth }
                                            />
                                        </div>
                                    )
                                }
                            }
                        </Field>
                        <Field name='password'>
                            {
                                (props: any): ReactElement => {
                                    const { input, meta } = props;
                                    return (
                                        <div>
                                            <InputPassword
                                                value={props.input.value}
                                                onChange={props.input.onChange}
                                                placeholder='Введите пароль'
                                                touched={ meta.touched }
                                                error={ meta.error }
                                                onBlur={input.onBlur}
                                                className={ styles.inputAvailableWidth }
                                            />
                                        </div>
                                    )
                                }
                            }
                        </Field>
                        <Button
                            viewType='primary'
                            text={ buttonText }
                            type='submit'
                        />
                    </form>
                )}
            />
        </div>
    );
}


interface Props { }
interface State {
    isRegistartion: boolean;
}

export class LoginPage extends PureComponent<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            isRegistartion: true,
        };
    }

    handleSwitchButton = (e): void => {
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
            <div className={styles.loginPage}>
                <Logo />
                <ModalForm>
                    <div className={styles.loginSwitchButton}>
                        <button
                            type='button'
                            id='registartion'
                            className={isRegistartion && styles.active}
                            onClick={this.handleSwitchButton}
                        >
                            Регистрация
                        </button>
                        <button
                            type='button'
                            id='login'
                            className={!isRegistartion && styles.active}
                            onClick={this.handleSwitchButton}
                        >
                            Вход
                        </button>
                    </div>
                    {isRegistartion ? authForm('Зерегистрироваться', isRegistartion) : authForm('Вход', isRegistartion)}
                </ModalForm>
            </div>
        );
    }
}
