import { Card, CardMedia, Typography, Button } from "@mui/material";
import { selectedProduct, addProduct } from "../redux";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";

function ProductDetails() {
  const products = useSelector((state) => {
    return state.products?.product;
  });
  const cartDataArr = useSelector((state) => state.products?.cartData);
  console.log(cartDataArr);
  const { id } = useParams();
  const dispatch = useDispatch();

  const fetchProductDetail = async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedProduct(response.data));
  };
  useEffect(() => {
    if (id) fetchProductDetail(id);
  }, [id]);

  const handleAddToCart = (item) => {
    dispatch(addProduct(cartDataArr, item));
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        marginTop: "3rem",
      }}
    >
      <Card style={{ width: "30%", height: "100%", padding: "2rem" }}>
        <CardMedia
          style={{ height: "200px" }}
          image={products?.image}
          title={products?.title}
        />

        <Typography gutterBottom variant="h5" component="h2">
          {products?.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {products?.description}
        </Typography>
        <Typography variant="h5" component="div" />
        {/* Material Button */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h4" color="textSecondary" component="p">
            {` $${products?.price}`}
          </Typography>
          <Button
            onClick={() => handleAddToCart(products)}
            style={{ marginTop: 10 }}
            variant="contained"
            color="primary"
          >
            Add to cart
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default ProductDetails;
