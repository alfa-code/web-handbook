export function mapHtmlTagsListByAlphabet(htmlTagsList: Array<{ name: string; }>) {
    const filteredHtmlTags: {
        [key: string]: string[];
    } = {};

    htmlTagsList.forEach((tag) => {
        const { name } = tag;
        const firstLetter = name.slice(0, 1);
        filteredHtmlTags[firstLetter] ?
            filteredHtmlTags[firstLetter].push(name) :
            filteredHtmlTags[firstLetter] = [name];
    });

    return filteredHtmlTags;
}
