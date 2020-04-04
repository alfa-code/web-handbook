import React, { PureComponent, ReactElement } from 'react';

import { Form, Field } from 'react-final-form';

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

function authForm(buttonText: string, isRegistartion: boolean): ReactElement {
    const onSubmit = async (values: FormValues): Promise<void> => {
        if (isRegistartion) {
            alert('Регистрация на данный момент не доступна!');
            return;
        }

        const response = await fetch('/auth/validate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
            redirect: 'follow'
        });

        if (response.ok && response.redirected) {
            alert('Вы успешно аутентифицированы');
            window.location.href = response.url;
        } else {
            alert('Некорректные данные пользователя');
        }
    }

    const validate = (): any => {
        const errors = {};
        return errors;
    }

    return (
        <div >
            <Form
                onSubmit={onSubmit}
                validate={validate}
                render={({ handleSubmit }): ReactElement => (
                    <form onSubmit={handleSubmit} className={styles.loginForm}>
                        <Field name='login'>
                            {
                                (props: any): ReactElement => {
                                    return (
                                        <div>
                                            <InputSimple
                                                value={props.input.value}
                                                onChange={props.input.onChange}
                                                placeholder='Введите ваш email'
                                            />
                                        </div>
                                    )
                                }
                            }
                        </Field>
                        <Field name='password'>
                            {
                                (props: any): ReactElement => {
                                    return (
                                        <div>
                                            <InputPassword
                                                value={props.input.value}
                                                onChange={props.input.onChange}
                                                placeholder='Введите ваш email'
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
