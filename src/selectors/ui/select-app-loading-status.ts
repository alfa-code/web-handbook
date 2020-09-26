import { selectUI } from './index';

export function selectAppLoadingStatus(state): boolean {
    return !!selectUI(state)?.loading;
}
