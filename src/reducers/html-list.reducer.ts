type InitialState = {
    htmlTagsList: {
        [key: string]: string[];
    },
}

const initialState: InitialState = {
    htmlTagsList: {},
}

export function htmlListReducer(state = initialState, action) {
    switch (action.type) {
      default:
        return {
            ...state
        }
    }
  }
