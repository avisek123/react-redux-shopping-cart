import { createStore, applyMiddleware, combineReducers } from "redux";
import bookReducer from "./reducer/bookReducer";
import TodoReducer from "./reducer/TodoReducer";
import formReducer from "./reducer/formRedcure";
import productReducer from "./reducer/productReducer";
// install npm i redux-logger
import thunk from "redux-thunk";
const rootReducer = combineReducers({
  book: bookReducer,
  todoReducer: TodoReducer,
  form: formReducer,
  products: productReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
