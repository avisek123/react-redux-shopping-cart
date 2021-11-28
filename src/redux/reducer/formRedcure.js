import * as actions from "../action/formAction";
const InitialState = {
  response: "",
};
const formReducer = (state = InitialState, action) => {
  switch (action.type) {
    case actions.CREATE_FORM:
      console.log(action);
      return {
        ...state,
        response: action.payload.response,
      };
    default:
      return state;
  }
};
export default formReducer;
