export const TYPES = {
    SET_APP_LOADING: 'SET_APP_LOADING',
};

export function setAppLoadingAC(isLoading: boolean) {
    return {
        type: TYPES.SET_APP_LOADING,
        payload: isLoading
    }
}
