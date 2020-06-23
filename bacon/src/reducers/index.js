import {FETCHING_IPSUM_START, FETCHING_IPSUM_SUCCESS, ERROR} from '../actions';

const initialState = {
    // image: "https://baconmockup.com/600/400/",
    loading: false,
    ipsum: [],
    isFetching: false,
    error: ""
};

export const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_IPSUM_START:
            return {
                ...state,
                isFetching: true,
                ipsum: []
            };
        case FETCHING_IPSUM_SUCCESS:
            return {
                ...state,
                ipsum: action.payload,
                isFetching: false,
            };
        case ERROR:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
            default:
                return state;
    }
};

