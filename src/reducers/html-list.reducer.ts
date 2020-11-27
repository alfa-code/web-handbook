type InitialState = {
    [key: string]: string[];
}

const initialState: InitialState = {
}

export function htmlListReducer(state = initialState, action) {
    switch (action.type) {
      default:
        return {
            ...state
        }
    }
  }
