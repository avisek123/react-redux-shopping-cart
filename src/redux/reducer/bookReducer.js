// create reducer
import * as actions from "../action/bookAction";
const intialState = {
  loading: false,
  cities: [],
  error: "",
};
const bookReducer = (state = intialState, action) => {
  switch (action.type) {
    case actions.USER_REQ:
      return {
        ...state,
        loading: true,
      };
    case actions.USER_RES:
      return {
        loading: false,
        cities: action.payload,
        error: "",
      };
    case "USER_ERR":
      return {
        loading: false,
        cities: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
export default bookReducer;
