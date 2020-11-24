export type HtmlTagResponce = {
    tagName: string;
    categories: string[];
    tag_omission: string[];
    description: string[];
    content_model: string;
    content_attributes: {
        global_attributes: boolean;
        custom_attributes: {
            name: string;
            description: string;
        }[];
    },
    syntax: string[];
}
