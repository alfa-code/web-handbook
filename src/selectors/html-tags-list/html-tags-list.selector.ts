import get from 'lodash/get';

export function selectHtmlTagsList(state) {
    return get(state, ['UI', 'htmlTagsList'], {});
}

export function selectHtmlTagsFlatList(state): string[] {
    const htmlTagsList = get(state, ['UI', 'htmlTagsList'], {});
    const flatHtmlTagsList = [];
    const alphabet = Object.keys(htmlTagsList);

    alphabet.forEach((letter) => {
        htmlTagsList[letter].forEach(element => {
            flatHtmlTagsList.push(element);
        });
    });
    return flatHtmlTagsList;
}
