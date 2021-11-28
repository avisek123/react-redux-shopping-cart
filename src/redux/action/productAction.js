// import axios
import axios from "axios";
// api
const API_URL = "https://fakestoreapi.com/products";
// create type
const GET_PRODUCTS = "GET_PRODUCTS";
const GET_PRODUCTS_ERR = "GET_PRODUCTS_ERR";
const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";
const SELECTED_PRODUCT = "SELCTED_PRODUCT";
// export type
export {
  GET_PRODUCTS,
  GET_PRODUCTS_ERR,
  GET_PRODUCTS_SUCCESS,
  SELECTED_PRODUCT,
};
// create action
export const productAction = () => {
  return {
    type: GET_PRODUCTS,
  };
};
export const productSuccess = (data) => {
  return {
    type: GET_PRODUCTS_SUCCESS,
    payload: data,
  };
};
export const productError = (error) => {
  return {
    type: GET_PRODUCTS_ERR,
    payload: error,
  };
};
export const selectedProduct = (product) => {
  return {
    type: SELECTED_PRODUCT,
    payload: product,
  };
};
// fetch data
export const getProducts = () => {
  try {
    return async (dispatch) => {
      console.log("dispatch", dispatch);
      dispatch(productAction());
      const response = await axios.get(API_URL);
      dispatch(productSuccess(response.data));
    };
  } catch (error) {
    return async (dispatch) => {
      dispatch(productError(error));
    };
  }
};
