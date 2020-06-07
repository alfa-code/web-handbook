export const FIELD_ERRORS = {
    REQUIRED: {
        code: 'REQUIRED',
        message: 'Это обязательное поле'
    },
    CONFIRMATION: {
        code: 'CONFIRMATION',
        message: 'Поля не совпадают'
    },
    ONLY_LATIN_SYMBOLS: {
        code: 'ONLY_LATIN_SYMBOLS',
        message: 'В этом поле должны быть только латинские символы'
    },
    NEED_DIGITS: {
        code: 'NEED_DIGITS',
        message: 'В этом поле должен присутствовать хотя бы один цифровой символ'
    },
    NEED_SPEC_SYMBOLS: {
        code: 'NEED_SPEC_SYMBOLS',
        message: 'В этом поле должны присутствовать хотя бы один спецсимвол (+-_"#!)'
    },
    MIN_LENGTH: {
        code: 'MIN_LENGTH',
        message: 'Это поле не может быть меньше ${min} символов'
    }
}

export const CHANGE_PASSWORD_ERRORS = {
    WRONG_OLD_PASSWORD: {
        code: 'WRONG_OLD_PASSWORD',
        message: 'Вы неверно ввели старый пароль!'
    },
    NO_SUCH_USER: {
        code: 'NO_SUCH_USER',
        message: 'Такой пользователь не найден!'
    },
    SAME_PASSWORD: {
        code: 'SAME_PASSWORD',
        message: 'Новый пароль не должен совпадать с прежним!'
    }
}
