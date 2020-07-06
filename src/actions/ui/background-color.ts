export const TYPES = {
    CHANGE_BACKGROUND_COLOR: 'CHANGE_BACKGROUND_COLOR',
};

export function changeBackgroundColor(color: string) {
    return {
        type: TYPES.CHANGE_BACKGROUND_COLOR,
        payload: color
    }
}
