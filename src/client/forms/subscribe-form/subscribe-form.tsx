import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Field } from 'react-final-form';
import Cookies from 'js-cookie';

import { Button } from 'Components/button';
import { InputSimple } from 'Components/input-simple';

import { COOKIES_NAMES } from 'Constants/cookies-names';

import styles from './subscribe-form.module.scss';

function validateEmail(values) {
    const { email = '' } = values;
    const errors: any = {};
    // eslint-disable-next-line
    if ( !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) ) {
        errors.email = 'Проверьте ваш Email';
    }
    return errors;
}

export function SubscribeForm() {
    const history = useHistory();

    const onSubmit = async ({ email }) => {
        Cookies.set(COOKIES_NAMES.email, email);
        history.push('/registration');
    }

    return (
        <Form
            onSubmit={onSubmit}
            validate={validateEmail}
            render={({ handleSubmit }): ReactElement => (
                <form className={styles.block} onSubmit={handleSubmit}>
                    <Field name='email'>
                        {
                            (props: any): ReactElement => {
                                return (
                                    <InputSimple
                                        placeholder="Введите ваш email"
                                        value={props.input.value}
                                        onChange={props.input.onChange}
                                        error={ props.meta.error }
                                        touched={ props.meta.touched }
                                    />
                                );
                            }
                        }
                    </Field>
                    <Button viewType="primary" type='submit'>
                        Получить доступ
                    </Button>
                </form>
            )}
        />
    );
}
