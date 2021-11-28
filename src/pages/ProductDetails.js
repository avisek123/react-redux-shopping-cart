import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getProducts } from "../redux";

function ProductDetails() {
  // get id of the product using useparams hook
  const { id } = useParams();
  console.log(id);

  const response = useSelector((state) => state.products?.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return <div>Product Details</div>;
}

export default ProductDetails;
