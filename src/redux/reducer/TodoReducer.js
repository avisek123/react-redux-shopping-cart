import * as actions from "../action/TodoAction";
const InitialState = {
  result: "",
  count: 0,
};
const TodoReducer = (state = InitialState, action) => {
  switch (action.type) {
    case actions.ADD_TODO:
      return {
        ...state,
        result: action.payload.result,
        count: action.payload.count,
      };

    default:
      return state;
  }
};
export default TodoReducer;
