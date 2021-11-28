import * as actions from "../action/productAction";
const InitialState = {
  products: [],
  product: {},
  loading: false,
  error: null,
};
const productReducer = (state = InitialState, action) => {
  switch (action.type) {
    case actions.GET_PRODUCTS:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    case actions.GET_PRODUCTS_ERR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
export default productReducer;
