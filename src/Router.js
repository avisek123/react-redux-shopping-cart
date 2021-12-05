import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import PrivateRouter from "./routes/PrivateRouter";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      {/* <Route exact path="/" element={<Home />} />
        <Route exact path="/:id/details" element={<ProductDetails />} /> */}
      <PrivateRouter />
    </BrowserRouter>
  );
};

export default Router;
