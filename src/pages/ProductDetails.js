import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { selectedProduct } from "../redux";

function ProductDetails() {
  const products = useSelector((state) => state.products?.product);
  console.log(products);
  // get id of the product using useparams hook
  const { id } = useParams();
  const dispatch = useDispatch();

  const fetchProductDetail = async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    console.log("response: ", response?.data);
    dispatch(selectedProduct(response.data));
  };
  useEffect(() => {
    if (id) fetchProductDetail(id);
  }, [id]);

  return (
    <div>
      <Card sx={{ margin: 2 }}>
        <CardMedia
          component="img"
          height="200"
          image={products.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="h5" component="div">
            {products?.title}
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
                  {products?.desc}
                </Typography> */}
          <Typography variant="h5" component="div">
            {`$ ${products?.price} `}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default ProductDetails;
