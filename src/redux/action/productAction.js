// import axios
import axios from "axios";
// api
const API_URL = "https://fakestoreapi.com/products";
// create type
const GET_PRODUCTS = "GET_PRODUCTS";
const GET_PRODUCTS_ERR = "GET_PRODUCTS_ERR";
const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";
const SELECTED_PRODUCT = "SELCTED_PRODUCT";
const ADD_PRODUCTS = "ADD_PRODUCTS";
// export type
export {
  GET_PRODUCTS,
  GET_PRODUCTS_ERR,
  GET_PRODUCTS_SUCCESS,
  SELECTED_PRODUCT,
  ADD_PRODUCTS,
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
export const addProduct = (prevArr, item) => {
  return {
    type: ADD_PRODUCTS,
    payload: [...prevArr, item],
  };
};
// fetch data
export const getProducts = () => {
  try {
    return async (dispatch) => {
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
// Add To Cart
export const addToCart = (item) => {
  return async (dispatch) => {
    dispatch(addProduct(item));
  };
};
