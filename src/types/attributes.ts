export type MappedAttributeStructure = {
    name?: string;
    description?: string;
    fullDescription?: boolean;
    type?: string;
    values?: {
        description?: string;
        values?: Array<{ name: string; meaning: string; }>;
        defaultValue?: string;
    },
    additionalDescription?: string;
}
