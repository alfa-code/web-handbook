export type HtmlTagResponce = {
    tagName: string;
    structure: Array<StructureElements>
}

interface StructureElement<T, V> {
	type: T;
    value: V;
}

type StructureElementCategories = StructureElement<'categories', string[]>
type StructureElementTagOmission = StructureElement<'tag_omission', string[]>
type StructureElementTagDescription = StructureElement<'description', string[]>
type StructureElementContentModel = StructureElement<'content_model', string>;
type StructureElementSyntax = StructureElement<'syntax', string[]>;
type StructureElementContentAttributes = StructureElement<'content_attributes', {
    global_attributes: boolean;
    custom_attributes: {
        name: string;
        description: string;
    }[];
}>;

type StructureElements =
    StructureElementCategories |
    StructureElementTagOmission |
    StructureElementTagDescription |
    StructureElementContentModel |
    StructureElementSyntax |
    StructureElementContentAttributes;
