import React, { PureComponent, ReactElement } from 'react';
import Cookies from 'js-cookie';
import { Form, Field } from 'react-final-form';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

import { COOKIES_NAMES } from 'Constants/cookies-names';

import { Button } from 'Src/client/components/button';
import { InputSimple } from 'Src/client/components/input-simple';
import { InputPassword } from 'Src/client/components/input-password';
import { Logo } from 'Src/client/components/logo';
import { ModalForm } from 'Src/client/components/modal-form';
import { Heading } from 'Src/client/components/heading';

import { Props } from './props';

import styles from './auth-page.module.scss';

type FormValues = {
    login?: string;
    password?: string;
}

async function logInRequest(values, authStartDA) {
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

export class AuthPage extends PureComponent<Props> {
    state = {
        login: ''
    }

    onSubmit = async (values: FormValues): Promise<void> => {
        const {
            mode,
            registrationStartDA,
            authStartDA
        } = this.props;

        if (mode === 'registration') {
            registrationStartDA(values)
        } else {
            logInRequest(values, authStartDA)
        }
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

    renderBottomLink = () => {
        const { mode } = this.props;
        const isRegistration = mode === 'registration';
        const labelText = isRegistration ? 'Уже есть аккаунт?' : 'Еще нет аккаунта?';
        const linkText = isRegistration ? 'Войдите' : 'Зарегистрироваться';
        const linkTo = isRegistration ? '/auth' : '/registration';

        return (
            <div className={ styles.bottomLink }>
                <span>
                    { labelText }
                </span>
                <Link
                    to={ linkTo }
                >
                    { linkText }
                </Link>
            </div>
        );
    }

    componentDidMount = () => {
        this.setState({
            login: Cookies.get(COOKIES_NAMES.email) || ''
        })
    }

    render(): any {
        const { mode, isLoading } = this.props;

        const buttonMode = isLoading ? 'loading' : 'normal';

        const isRegistration = mode === 'registration';
        const title = isRegistration ? 'Регистрация' : 'Вход';
        const passwordPlaceholder = isRegistration ? 'Придумайте пароль' : 'Введите пароль';

        const initialValues = {
            login: this.state.login
        }

        return (
            <div className={styles.loginPage}>
                <div className={ styles.centerContainer }>
                    <Logo />
                    <ModalForm className={ styles.modalForm }>
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
                                                mode={ buttonMode }
                                            />
                                        </form>
                                    )}
                                />
                            </div>
                            { this.renderBottomLink() }
                        </div>
                    </ModalForm>
                </div>
            </div>
        );
    }
}
