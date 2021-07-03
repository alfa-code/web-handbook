import get from 'lodash/get';

import { MappedAttributeStructure } from 'Src/types/attributes';
import { RootState } from 'Src/client/app/app';

export function selectIsHtmlAttributeInfoLoading(state: RootState): boolean {
    return get(state, ['data', 'attributesInfo', 'isLoading'], false);
}

export function selectHtmlAttributeInfo(state: RootState, attributeName: string): MappedAttributeStructure {
    return get(state, ['data', 'attributesInfo', 'list', attributeName]);
}

