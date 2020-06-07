import { ErrorWithCode } from 'Types/errors';

export type ListItem = {
    code: string;
    message: string;
}

export type Props = {
    list: ListItem[];
    errors: ErrorWithCode[];
}
