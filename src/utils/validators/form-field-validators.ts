import { ErrorsArray } from 'Src/utils/errors/ErrorArray';

export const formFieldValidators = {
    REQUIRED: (val: string): boolean => Boolean(val),
    CONFIRMATION: (val1: string, val2: string): boolean => (val1 === val2),
    ONLY_LATIN_SYMBOLS: (val: string): boolean => {
        const regexp = new RegExp(/[0-9a-zA-Z_+!@#-]+/);
        return regexp.test(val)
    },
    ONLY_WORDS: (val: string): boolean => {
        const regexp = new RegExp(/^[a-zA-Zа-яА-Я]+$/);
        return regexp.test(val)
    },
    NEED_DIGITS: (val: string): boolean => {
        const regexp = new RegExp(/[0-9]+/);
        return regexp.test(val)
    },
    NEED_SPEC_SYMBOLS: (val: string): boolean => {
        const regexp = new RegExp(/[_+!@#-]+/);
        return regexp.test(val)
    },
    MIN_LENGTH: (val: string, length: number) => (val?.length >= length)
};

/**
 * Создаение валидирующего объекта с предустановленными валидаторами
 * @param value
 */
export function validateFieldValue(value) {
    return new ErrorsArray(value, formFieldValidators);
}
