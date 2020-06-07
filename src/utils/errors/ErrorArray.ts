import { ErrorWithCode } from 'Types/errors';

export class ErrorsArray extends Array {
    validators: any;
    value: any;

    constructor(value, validators, args: any[] = [0]) {
        super(...args);

        this.value = value;
        this.validators = validators;
    }

    checkFor(error: ErrorWithCode | string, param?: any) {
        const errorCode = (typeof error === 'string') ? error : error.code;
        const isValid = this.validators[errorCode](this.value, param);

        if (!isValid) {
            this.push(error)
        }

        return this;
    }

    setValue(value: any) {
        return new ErrorsArray(value, this.validators, this);
    }
}
