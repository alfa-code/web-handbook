export function mapHtmlTagsListByAlphabet(htmlTagsList: Array<{ name: string; obsolete?: boolean }>) {
    const filteredHtmlTags: {
        [key: string]: any;
    } = {};

    htmlTagsList.forEach((tag) => {
        const { name } = tag;
        const firstLetter = name.slice(0, 1);

        filteredHtmlTags[firstLetter] ?
            filteredHtmlTags[firstLetter].push(tag) :
            filteredHtmlTags[firstLetter] = [tag];
    });

    return filteredHtmlTags;
}
