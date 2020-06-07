import { Shape } from 'Types/objects';
import { FIELD_ERRORS } from 'Src/constants/error-codes';
import { validateFieldValue } from 'Src/utils/validators/form-field-validators';
import { clearEmptyKeys } from 'Src/utils/objects/clearEmptyKeys';

const PASSWORD_LENGTH = 6;

export function changePasswordValidation(values: Shape<string>, ERRORS = FIELD_ERRORS) {
    const errors = {
        newPassword: undefined,
        oldPassword: undefined,
        repeatNewPassword: undefined,
    };

    const MIN_LENGTH_ERROR = {
        ...ERRORS.MIN_LENGTH,
        message: ERRORS.MIN_LENGTH.message.replace('${min}', PASSWORD_LENGTH.toString())
    }

    errors.newPassword = validateFieldValue(values.newPassword)
        .checkFor(ERRORS.REQUIRED)
        .checkFor(MIN_LENGTH_ERROR, PASSWORD_LENGTH)
        .checkFor(ERRORS.ONLY_LATIN_SYMBOLS)
        .checkFor(ERRORS.NEED_SPEC_SYMBOLS)
        .checkFor(ERRORS.NEED_DIGITS);

    errors.oldPassword = values.oldPassword ? errors.oldPassword : ERRORS.REQUIRED;

    errors.repeatNewPassword = validateFieldValue(values.repeatNewPassword)
        .checkFor(ERRORS.REQUIRED)
        .checkFor(ERRORS.CONFIRMATION, values.newPassword)

    return clearEmptyKeys(errors);
}
