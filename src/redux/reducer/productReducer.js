import * as actions from "../action/productAction";
const InitialState = {
  products: [],
  product: {},
  loading: false,
  error: null,
  cartData: [],
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
    case actions.SELECTED_PRODUCT:
      return {
        ...state,
        product: action.payload,
        loading: false,
      };
    case actions.ADD_PRODUCTS:
      return {
        ...state,
        cartData: action.payload,
      };
    default:
      return state;
  }
};
export default productReducer;
