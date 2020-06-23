import axios from 'axios';

export const getIpsum = () => dispatch => {
    dispatch({ type: "FETCHING_IPSUM_START"});
    axios
      .get("https://baconipsum.com/api/?type=meat-and-filler")
      .then(res => {
          console.log(res);
          dispatch({type: "FETCHING_IPSUM_SUCCESS", payload: res.data});
      }) 
      .catch(err => {
          console.log(err);
      });
};