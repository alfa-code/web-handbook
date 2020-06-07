import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { Form, Field } from 'react-final-form'

import {
    changePasswordRequestStartAC,
    passwordValidationHintSetVisibilityAC
} from 'Actions/ui/change-password-actions';
import { InputPassword } from 'Components/input-password';
import { Button } from 'Components/button';
import { SubmitBlock } from 'Components/style-wrappers/profile';
import { formFieldAdapter } from 'Src/client/containers/form-field-adapter';
import { selectUIChangePassword } from 'Selectors/ui/change-password';
import { changePasswordValidation } from 'Forms/user-password-form/validation';
import { ValidList } from 'Src/client/containers/valid-list/valid-list';

import { Props } from './props';


const passwordNewValidFields = [
    {
        code: 'MIN_LENGTH',
        message: 'Не менее 6 символов'
    },
    {
        code: 'ONLY_LATIN_SYMBOLS',
        message: 'Только латинские символы'
    },
    {
        code: 'NEED_DIGITS',
        message: 'Присутствует хотя бы одна цифра'
    },
    {
        code: 'NEED_SPEC_SYMBOLS',
        message: 'Присутствует хотя бы один спецсимвол'
    }
];

const UserPasswordFormContainerComponent = (props: Props) => {
    const {
        submit,
        hintVisible,
        PasswordField = InputPassword,
        validate = changePasswordValidation,
        setHintVisibility,
        sending,
    } = props;

    const onNewPasswordFocus = useCallback(() => {
        setHintVisibility(true);
    }, [ setHintVisibility ]);

    return (
        <Form
            onSubmit={ submit }
            validate={ validate }
        >
            { ({ errors, handleSubmit }) => (
                    <form onSubmit={ handleSubmit }>
                        <Field name='newPassword' onFocus={ onNewPasswordFocus }>
                            { formFieldAdapter({
                                component: PasswordField,
                                placeholder: 'Новый пароль',
                                onFocus: onNewPasswordFocus
                            }) }
                        </Field>
                        {
                            hintVisible &&
                            <ValidList
                                list={ passwordNewValidFields }
                                errors={ errors.newPassword || [] }
                            />
                        }
                        <Field name='repeatNewPassword'>
                            { formFieldAdapter({
                                component: PasswordField,
                                placeholder: 'Подтверждение пароля'
                            }) }
                        </Field>
                        <Field name='oldPassword'>
                            { formFieldAdapter({
                                component: PasswordField,
                                placeholder: 'Текущий пароль'
                            }) }
                        </Field>
                        <SubmitBlock className={sending ? 'block' : ''}>
                            <Button type='submit'
                                    viewType='primary'
                            >
                                { sending ? 'Сохранение' : 'Сохранить'}
                            </Button>
                        </SubmitBlock>
                    </form>
            ) }
        </Form>
    );
};

const mapStateToProps = (state) => {
    const ui = selectUIChangePassword(state);

    return {
        hintVisible: ui?.hintVisible,
        sending: ui?.sending
    }
};

const mapDispatchToProps = {
    submit: changePasswordRequestStartAC,
    setHintVisibility: passwordValidationHintSetVisibilityAC
};

export const UserPasswordForm = connect(mapStateToProps, mapDispatchToProps)(UserPasswordFormContainerComponent);
