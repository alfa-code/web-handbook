type InitialState = {
    htmlTagsList: {
        [key: string]: string[];
    },
    htmlTagsInfo: {
        isLoading: boolean;
        list: {
            [key: string]: {
                [key: string]: any
            }
        }
    }
}

const initialState: InitialState = {
    htmlTagsList: {},
    htmlTagsInfo: {
        isLoading: false,
        list: {}
    }
}

export function uiReducer(state = initialState, action) {
    switch (action.type) {
      default:
        return {
            ...state
        }
    }
  }
