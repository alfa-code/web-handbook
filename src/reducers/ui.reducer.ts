type InitialState = {
    htmlTags: {
        [key: string]: string[]
    }
}

const initialState: InitialState = {
    htmlTags: {}
}

export function uiReducer(state = initialState, action) {
    switch (action.type) {
      default:
        return {
            ...state
        }
    }
  }
