import React, { ReactElement, useState } from 'react';
import { Form, Field } from 'react-final-form';
import { Button } from 'Components/button';
import { InputSimple } from 'Components/input-simple';

import styles from './postgre-form.module.scss';

export function PostgreForm() {
    const [sqlResponse, setSqlResponse] = useState();

    const onSubmit = async (values): Promise<void> => {
        const response = await fetch('/api/postgre/request', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        });

        const result = await response.json();

        if (result) {
            setSqlResponse(result);
        }
    }

    const validate = (): any => {
        const errors = {};
        return errors;
    }

    return (
        <div className={ styles.block }>
            <Form
                onSubmit={onSubmit}
                validate={validate}
                render={({ handleSubmit }): ReactElement => (
                    <form onSubmit={handleSubmit} className={ styles.form }>
                        <Field name='sql'>
                            {
                                (props: any): ReactElement => {
                                    return (
                                        <div>
                                            <InputSimple
                                                value={props.input.value}
                                                onChange={props.input.onChange}
                                                placeholder='Введите ваш запрос'
                                            />
                                        </div>
                                    )
                                }
                            }
                        </Field>
                        <Button
                            viewType='primary'
                            text={ 'Отправить' }
                            type='submit'
                        />
                    </form>
                )}
            />
            <div className={ styles.json }>
                { JSON.stringify(sqlResponse, null, '  ') }
            </div>
        </div>
    );
}
