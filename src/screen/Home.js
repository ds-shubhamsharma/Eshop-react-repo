import React from "react";
import CategoryOption from "../components/Category/CategoryOption";
import Slider from "../components/layouts/Slider";
// import ProductDetail from "./ProductDetail";
import ProductListing from "./ProductListing";

function Home() {
  return (
    <>
      <Slider />
      <CategoryOption />
      <div className="container">
        <div className="p-b-10">
          <h3 className="ltext-103 cl5">Product Overview</h3>
        </div>
      </div>
{/* <ProductDetail/> */}
      <ProductListing />
    </>
  );
}

export default Home;
