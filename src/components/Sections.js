import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux";
import { useNavigate } from "react-router";

function Sections() {
  const response = useSelector((state) => state.products?.products);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  let navigate = useNavigate();

  return (
    <div style={{ marginTop: "1rem" }}>
      <Grid container>
        {response?.map((item) => (
          <Grid key={item?.id} item lg={3} md={3}>
            <Card sx={{ margin: 2 }}>
              <CardMedia
                component="img"
                height="200"
                image={item.image}
                alt="green iguana"
                onClick={() => navigate(`/${item?.id}/details`)}
              />
              <CardContent>
                <Typography
                  textOverflow="ellipsis"
                  variant="h5"
                  component="div"
                  style={{ overflow: "hidden", whiteSpace: "nowrap" }}
                >
                  {item?.title}
                </Typography>

                <Typography variant="h5" component="div">
                  {`$ ${item?.price} `}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Sections;
