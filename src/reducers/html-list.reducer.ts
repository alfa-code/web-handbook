type InitialState = {
    [key: string]: string[] | boolean;
}

const initialState: InitialState = {
    isHtmlElementsListLoaded: false,
    list: [],
}

export function htmlListReducer(state = initialState, action) {
    const { type } = action;

    switch (type) {
        default: {
            return {
                ...state
            }
        }
    }
}
