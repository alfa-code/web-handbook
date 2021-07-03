export type AttributeInfo = {
    type: string; // TODO: удалить
    name: string;
    structure: Array<{ type: string; value: any }>
    additionalDescription: string | string[];
}
