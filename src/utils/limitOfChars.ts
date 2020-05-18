/**
 * Функция для подрезки текста по количеству символов
 * @param string - строка
 * @param count - максимально допустимое количество символов
 * @param postfix - что поставить после
 * @param cutWord - если флаг установлен, то слово может быть обрезано в месте где длинна строки превышает допустимое
 * @param searchWhitespaceTolerance - допустимое количество символов по превышению которого "не вмещающееся" слово
 * будет исключено (на случай длинных слов в месте подрезки)
 */
export function limitOfChars(
    string: string,
    count: number,
    postfix = '...',
    cutWord = false,
    searchWhitespaceTolerance = 5
): string {
    let cutIndex = count;

    if (string.length > count) {
        if (!cutWord) {
            cutIndex = string.indexOf(' ', count);

            if (cutIndex === -1 || cutIndex > (count + searchWhitespaceTolerance)) {
                cutIndex = string.lastIndexOf(' ', count);
            }
        }
    } else {
        postfix = '';
    }

    return string.substring(0, cutIndex) + postfix;
}


