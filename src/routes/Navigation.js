import React from "react";
import { Routes, Route } from "react-router-dom";
import BlogDetail from "../components/Category/BlogDetail";
import CategoryOption from "../components/Category/CategoryOption";
import Footer from "../components/layouts/Footer";
import TopBar from "../components/layouts/TopBar";
import Nav from "../components/Nav";
import RelatedProduct from "../components/RelatedProduct";
import AboutUs from "../screen/AboutUs";
import Blog from "../screen/Blog";
import Cart from "../screen/Cart";
import CheckOutPage from "../screen/CheckOutPage";
import ContactUs from "../screen/ContactUs";
import Home from "../screen/Home";
import Login from "../screen/Login";
import ProductDetail from "../screen/ProductDetail";
import ProductListing from "../screen/ProductListing";
import Register from "../screen/Register";

function Navigation() {
  return (
    <>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-listing" element={<ProductListing />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blog-details" element={<BlogDetail />} />
        <Route path="/product-detail" element={<ProductDetail />} />
        <Route path="/realeted-product" element={<RelatedProduct />} />
        <Route path="/add-to-cart" element={<Cart />} />
        <Route path="/check-out" element={<CheckOutPage />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/about-us" element={<CategoryOption />} />
      </Routes>
      <Footer />
    </>
  );
}

export default Navigation;
