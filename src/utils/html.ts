import { HTML_TAGS_LIST, ALPHABET } from 'Constants/index';

export function getHtmlTagsListByAlphabet() {
    const filteredHtmlTags: {
        [key: string]: string[];
    } = {};

    const htmlTags = Object.keys(HTML_TAGS_LIST);
    ALPHABET.forEach((letter) => {
        filteredHtmlTags[letter] = htmlTags.filter((htmlTag) => {
            const regExp = new RegExp(`^${letter}`);
            return htmlTag.match(regExp);
        });
    });

    return filteredHtmlTags;
}
