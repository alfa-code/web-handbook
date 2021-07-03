import get from 'lodash/get';

import { AttributeInfo } from 'Src/types/api/attribute-info';
import { RootState } from 'Src/client/app/app';

export function selectIsHtmlAttributeInfoLoading(state: RootState): boolean {
    return get(state, ['data', 'attributesInfo', 'isLoading'], false);
}

export function selectHtmlAttributeInfo(state: RootState, attributeName: string): AttributeInfo {
    return get(state, ['data', 'attributesInfo', 'list', attributeName]);
}

