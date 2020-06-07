import { selectUI } from './index';

export function selectUIChangePassword(state) {
    return selectUI(state)?.changePassword;
}
