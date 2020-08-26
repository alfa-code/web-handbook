import { selectUI } from './index';

export function selectHeaderMenuOpened(state) {
    return selectUI(state)?.header?.menuOpened;
}
