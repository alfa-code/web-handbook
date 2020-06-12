import React, { PureComponent, ReactElement } from 'react';
import Cookies from 'js-cookie';
import { Form, Field } from 'react-final-form';
import { toast } from 'react-toastify';

import { COOKIES_NAMES } from 'Constants/cookies-names';

import { Button } from 'Src/client/components/button';
import { InputSimple } from 'Src/client/components/input-simple';
import { InputPassword } from 'Src/client/components/input-password';
import { Logo } from 'Src/client/components/logo';
import { ModalForm } from 'Src/client/components/modal-form';
import { Heading } from 'Src/client/components/heading';

import styles from './auth-page.module.scss';

type FormValues = {
    login?: string;
    password?: string;
}

async function registrationRequest(values) {
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

async function logInRequest(values) {
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

interface Props {
    mode: 'registration' | 'login';
}

export class AuthPage extends PureComponent<Props> {
    onSubmit = async (values: FormValues): Promise<void> => {
        const { mode } = this.props;
        const request = mode === 'registration' ? registrationRequest : logInRequest;
        request(values);
    }

    validateForm = (values): any => {
        const { login, password } = values;
        const emailRegExp = new RegExp('[^@]+@[^.]+..+');
        const passwordRegExp = new RegExp('[0-9a-zA-Z]{6,}');

        const errors = {
            login: !login ? 'Поле обязательное' : (emailRegExp.test(login) ? undefined : 'Введите корректный Email'),
            password: !password ? 'Поле обязательное' : (passwordRegExp.test(password) ? undefined : 'Пароль должен состоять минимум из 6 знаков')
        };

        return errors;
    }

    render(): any {
        const { mode } = this.props;
        
        const isRegistration = mode === 'registration';
        const title = isRegistration ? 'Регистрация' : 'Вход';
        const passwordPlaceholder = isRegistration ? 'Придумайте пароль' : 'Введите пароль';

        const initialValues = {
            // login: loginInitialValue
            login: Cookies.get(COOKIES_NAMES.email) || ''
        }

        return (
            <div className={styles.loginPage}>
                <Logo />
                <ModalForm>
                    <div className={ styles.container }>
                        <div className={styles.headingRow}>
                            <Heading size={3}>
                                { title }
                            </Heading>
                        </div>
                        <div>
                            <Form
                                onSubmit={ this.onSubmit }
                                validate={ this.validateForm }
                                initialValues={ initialValues }
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
                                                                placeholder={ passwordPlaceholder }
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
                                            viewType="primary"
                                            text={ title }
                                            type="submit"
                                        />
                                    </form>
                                )}
                            />
                        </div>
                    </div>
                </ModalForm>
            </div>
        );
    }
}
