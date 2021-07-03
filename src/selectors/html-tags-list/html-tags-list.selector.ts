import get from 'lodash/get';

export function selectHtmlTagsList(state) {
    return get(state, ['data', 'htmlTagsList', 'list'], []);
}

/**
 * Данный селектор выбирает массив объектов html тегов и преобразует в плоский массив строк/элементов.
 * @param state Стейт приложения
 * @returns Массив строк (html элементов) - данный список элементов нужен для рендеренги списка тегов и меню
 */
export function selectHtmlTagsFlatList(state): string[] {
    const htmlTagsList = selectHtmlTagsList(state);

    const flatHtmlTagsList = [];

    htmlTagsList.forEach((htmlElem) => {
        flatHtmlTagsList.push(htmlElem.name);
    });

    return flatHtmlTagsList;
}
