import { selectUI } from './index';

export function selectAppLoadingStatus(state) {
    return selectUI(state)?.loading;
}
