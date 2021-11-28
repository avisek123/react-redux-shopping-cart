import axios from "axios";
// fake api
const API_URL = "https://mocki.io/v1/48419bdb-1d76-45a1-89cb-3ac3fcc7f6ca";
// create Type

const USER_REQ = "USER_REQ";
const USER_RES = "USER_RES";
const USER_ERR = "USER_ERR";
export { USER_REQ, USER_RES, USER_ERR };

// create action
export const userReq = () => {
  return {
    type: USER_REQ,
  };
};
export const userRes = (data) => {
  return {
    type: USER_RES,
    payload: data,
  };
};
export const userErr = (err) => {
  return {
    type: USER_ERR,
    payload: err,
  };
};

// create fetch function
export const getData = () => {
  try {
    return async (dispatch) => {
      dispatch(userReq());
      const res = await axios.get(API_URL);
      dispatch(userRes(res.data));
    };
  } catch (error) {
    return (dispatch) => {
      dispatch(userErr(error));
    };
  }
};
