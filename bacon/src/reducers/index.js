import {FETCHING_IPSUM_START, FETCHING_IPSUM_SUCCESS, ERROR} from '../actions';

const initialState = {
    image: "https://images.unsplash.com/photo-1592086326871-f7cf2f1801ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
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

