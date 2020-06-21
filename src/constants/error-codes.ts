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
    ONLY_WORDS: {
        code: 'ONLY_WORDS',
        message: 'В этом поле не допустимы цифры, пробелы или спецсимволы',
    },
    MIN_LENGTH: {
        code: 'MIN_LENGTH',
        message: 'Это поле не может быть меньше ${min} символов'
    },
    "Network Error": {
        code: 'NETWORK_ERROR',
        message: 'Упс! Похоже у вас проблемы с соединением!'
    }
}

export const CHANGE_PASSWORD_ERRORS = {
    WRONG_OLD_PASSWORD: {
        code: 'WRONG_OLD_PASSWORD',
        message: 'Вы неверно ввели пароль!'
    },
    SAME_PASSWORD: {
        code: 'SAME_PASSWORD',
        message: 'Новый пароль не должен совпадать с прежним!'
    }
}

export const USER_ERRORS = {
    NO_SUCH_USER: {
        code: 'NO_SUCH_USER',
        message: 'Такой пользователь не найден!'
    },
}

export const SYSTEM_ERRORS = {
    ERROR_WHILE_DB_REQUEST: {
        code: 'ERROR_WHILE_DB_REQUEST',
        message: 'Такой пользователь не найден!'
    },
}
