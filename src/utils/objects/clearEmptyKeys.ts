import { Shape } from 'Types/objects';

/**
 * Приводит к undefined ключи объекта, если это пустое значение (в т.ч. массивы)
 * @param obj - обрабатываемый объект
 */
export function clearEmptyKeys(obj: Shape<any>) {
    const newObject = { ...obj };

    for (const key in newObject) {
        if (Object.prototype.hasOwnProperty.call(newObject, key)) {
            const notEmpty = Array.isArray(newObject[key]) ? newObject[key].length > 0 : Boolean(newObject[key]);

            if (!notEmpty) {
                newObject[key] = undefined;
            }
        }
    }

    return newObject;
}
