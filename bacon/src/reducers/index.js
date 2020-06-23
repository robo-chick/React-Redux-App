const initialState = {
    loading: false,
    ipsum: null,
    isFetching: false,
    error: ""
};

export const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case "FETCHING_IPSUM_START":
            return {
                ...state,
                isFetching: true,
                error: ""
            };
        case "FETCHING_IPSUM_SUCESS":
            return {
                ...state,
                ipsum: action.payload,
                isFetching: false
            };
            default:
                return state;
    }
};

