interface InitialState {
    list: Array<{ [key: string]: any }>
}

const initialState: InitialState = {
    // isDataLoaded: false, ???
    list: [],
}

export function htmlAttributesListReducer(state = initialState, action) {
    const { type } = action;

    switch (type) {
        default: {
            return {
                ...state
            }
        }
    }
}
