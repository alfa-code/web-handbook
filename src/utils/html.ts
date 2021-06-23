// import { set } from 'lodash';

export function mapHtmlTagsListByAlphabet(htmlTagsList: Array<{ name: string; obsolete?: boolean }>) {
    const filteredHtmlTags: {
        [key: string]: any;
    } = {};

    // console.log('htmlTagsList', htmlTagsList)

    htmlTagsList.forEach((tag) => {
        const { name } = tag;
        const firstLetter = name.slice(0, 1);

        // set(filteredHtmlTags, [firstLetter, ''])

        filteredHtmlTags[firstLetter] ?
            filteredHtmlTags[firstLetter].push(tag) :
            filteredHtmlTags[firstLetter] = [tag];
    });

    return filteredHtmlTags;
}
