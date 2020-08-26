export const TYPES = {
    CHANGE_HEADER_MENU_VISABILITY: 'CHANGE_HEADER_MENU_VISABILITY',
};

export function changeHeaderMenuVisabilityAC(visibility: boolean) {
    return {
        type: TYPES.CHANGE_HEADER_MENU_VISABILITY,
        payload: visibility
    }
}
