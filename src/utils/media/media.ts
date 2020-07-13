type MatchMediaOperator = ">" | "<" | "=" | "<=" | ">=" | null;

/**
 * Возвращает оператор из переданного условия
 * @param string
 */
export function matchOperator(string: string): MatchMediaOperator {
    const operators = [">", "<", "=", "<=", ">="] as MatchMediaOperator[];

    return operators.reduce((result, operator) => {
        if (~string.indexOf(operator)) {
            result = operator;
        }

        return result;
    }, null)
}

/**
 * Вычисление соответствия ширины экрана указанному условию
 * @param match - строка-условие для матчинка разрешения
 */
export function media(match: string | number): boolean {
    if (typeof match === "number") {
        return window.innerWidth === match;
    }

    const matchedOperator = matchOperator(match);

    switch (matchedOperator) {
        case '<':
            return window.innerWidth < parseInt(match.substring(1));
        case '>':
            return window.innerWidth > parseInt(match.substring(1));
        case '<=':
            return window.innerWidth <= parseInt(match.substring(2));
        case '>=':
            return window.innerWidth >= parseInt(match.substring(2));
        case '=':
            return window.innerWidth === parseInt(match.substring(1));
        case null:
            return window.innerWidth === parseInt(match);

    }
}
