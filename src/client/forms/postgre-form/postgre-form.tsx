import React, { ReactElement, useState } from 'react';
import { Form, Field } from 'react-final-form';
import { Button } from 'Components/button';
import { InputSimple } from 'Components/input-simple';

import styles from './postgre-form.module.scss';

export function PostgreForm() {
    const [sqlResponse, setSqlResponse] = useState();
    const [sqlHistory, setSqlHistory] = useState([]);
    const history = [...sqlHistory];

    const onSubmit = async (values): Promise<void> => {
        const stringValues = JSON.stringify(values)

        history.push(stringValues)
        setSqlHistory(history);

        const response = await fetch('/api/postgre/request', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: stringValues,
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
            <div>
                {
                    sqlHistory.map((item) => {
                        return (
                            <div key={ item.toString() }>
                                { item }
                            </div>
                        )
                    })
                }
            </div>
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
