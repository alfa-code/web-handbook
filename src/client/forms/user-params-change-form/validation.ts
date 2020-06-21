import { FIELD_ERRORS } from 'Src/constants/error-codes';
import { validateFieldValue } from 'Utils/validators/form-field-validators';
import { clearEmptyKeys } from 'Utils/objects/clearEmptyKeys';

import { Shape } from 'Types/objects';

export function userParamsValidation(values: Shape<string>, ERRORS = FIELD_ERRORS) {
    const errors = {
        name: undefined,
        surname: undefined,
    };

    errors.name = validateFieldValue(values.name)
        .checkFor(ERRORS.REQUIRED)
        .checkFor(ERRORS.ONLY_WORDS);
    errors.surname = validateFieldValue(values.surname)
        .checkFor(ERRORS.REQUIRED)
        .checkFor(ERRORS.ONLY_WORDS);

    return clearEmptyKeys(errors);
}
