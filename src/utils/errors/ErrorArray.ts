import { ErrorWithCode } from 'Types/errors';

/**
 * Класс создающий массив с ошибками валидации переданного значения
 */
export class ErrorsArray extends Array {
    validators: any;
    value: any;

    /**
     * Конструктор
     * @param value - валидируетое значение
     * @param validators - список валидаторов
     * @param args - изначальные элементы массива
     */
    constructor(value, validators, args: any[] = [0]) {
        super(...args);

        this.value = value;
        this.validators = validators;
    }

    /**
     * Ищет валидатор с переданным кодом и проверяет на валидность
     * @param error - объект ошибки или код
     * @param param - параметр, передаваемый в валидатор
     */
    checkFor(error: ErrorWithCode | string, param?: any) {
        const errorCode = (typeof error === 'string') ? error : error.code;
        const isValid = this.validators[errorCode](this.value, param);

        if (!isValid) {
            this.push(error)
        }

        return this;
    }

    /**
     * Если нужно изменить валидируемое значение
     * (может пригодиться если нужно получить ошибки нескольких значений в одном массиве)
     * @param value - валидируемое значение
     */
    setValue(value: any) {
        return new ErrorsArray(value, this.validators, this);
    }
}
