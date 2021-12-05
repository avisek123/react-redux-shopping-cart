import React from "react";
import { AppBar, Badge, Toolbar, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";

function Header() {
  const products = useSelector((state) => {
    return state.products?.cartData;
  });

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My Shop
        </Typography>
        <Badge badgeContent={products?.length} color="primary">
          <ShoppingCartIcon color="action" />
        </Badge>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
