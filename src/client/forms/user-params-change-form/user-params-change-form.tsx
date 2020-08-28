import React from 'react';
import { connect } from 'react-redux';
import { Form, Field } from 'react-final-form';

import { formFieldAdapter } from 'Src/client/containers/form-field-adapter';

import { Button } from 'Components/button';
import { SubmitBlock } from 'Components/style-wrappers/profile';
import { userParamsChange, userParamsGet } from 'Actions/request-actions';
import { selectUI } from 'Selectors/ui';
import { selectUserParams } from 'Selectors/user-params';
import { userParamsValidation } from 'Forms/user-params-change-form/validation';

import { Props } from './props';

export const UserParamsChangeFormComponent = (props: Props) => {
    const { submit, FormField, initialValues: { name, surname }, getInitialValuesDA, sending } = props;

    React.useEffect(() => {
        getInitialValuesDA();
    }, [])

    if (!name) return false;

    return (
            <Form
                onSubmit={ submit }
                validate={ userParamsValidation }
                initialValues={ { name, surname } }
                keepDirtyOnReinitialize={ true }
            >
                { ({ handleSubmit }) => (
                    <form onSubmit={ handleSubmit }>
                        <Field name='name'>
                            {
                                formFieldAdapter({
                                    component: FormField,
                                    placeholder: 'Имя',
                                })
                            }
                        </Field>
                        <Field name='surname'>
                            {
                                formFieldAdapter({
                                    component: FormField,
                                    placeholder: 'Фамилия',
                                })
                            }
                        </Field>
                        <SubmitBlock className={sending ? 'block' : ''}>
                            <Button type='submit' viewType='primary'>
                                { sending ? 'Сохранение' : 'Сохранить'}
                            </Button>
                            <Button viewType='secondary'>Удалить аккаунт</Button>
                        </SubmitBlock>
                    </form>
                )
                }
            </Form>
    );
};

const mapStateToProps = (state) => {
    const ui = selectUI(state);

    return {
        sending: ui?.userParams?.sending,
        initialValues: selectUserParams(state)
    }
}

const mapDispatchToProps = {
    submit: userParamsChange.request,
    getInitialValuesDA: userParamsGet.request,
}

export const UserParamsChangeForm = connect(mapStateToProps, mapDispatchToProps)(UserParamsChangeFormComponent);
