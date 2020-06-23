import axios from 'axios';

export const FETCHING_IPSUM_START = "FETCHING_IPSUM_START";
export const FETCHING_IPSUM_SUCCESS = "FETCHING_IPSUM_SUCCESS";
export const ERROR = "ERROR";

export const getIpsum = () => dispatch => {
    dispatch({type: FETCHING_IPSUM_START});

    axios
      .get("https://baconipsum.com/api/?type=meat-and-filler")
      .then(res => {
          console.log(res.data);
          dispatch({type: FETCHING_IPSUM_SUCCESS, payload: res.data})
      })
      .catch(err => {
          console.log("error", err);
          dispatch({ type: ERROR, payload: "ERROR"})
      })
}