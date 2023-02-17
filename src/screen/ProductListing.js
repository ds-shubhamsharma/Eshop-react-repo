import React, { useEffect, useState } from "react";
import { productListData } from "../Services/apiCalling";
import { Link } from "react-router-dom";
import ProductListTopBar from "../components/ProductListTopBar";
import icon1 from "../assets/images/icons/icon-heart-01.png";
import icon2 from "../assets/images/icons/icon-heart-02.png";
// import Products from "../containers/Products";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slice/productsSlice";
import { addToCart } from "../redux/slice/cartSlice";

// import styled from "styled-components";


const ProductListing = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);



  const [productData, setProductData] = useState([]);

  useEffect(() => {
    productListData()
      .then((res) => {
        setProductData(res);
      })
      .catch((err) => {});
    return () => {};
  }, []);
 

  return (
    <>
      <div className="bg0 m-t-23 p-b-140">
        <div className="container">
          <ProductListTopBar />{" "}
          {/* <Products/> */}
          <div className="row isotope-grid">
            {productData?.products?.map((products) => {
              return (
                <>
                  <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
                    <div className="block2">
                      <div className="block2-pic hov-img0">
                        <img src={products.thumbnail} alt="IMG-products" />
                        <Link
                          to="#"
                        className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                        onClick={() => {
                          dispatch(addToCart(products));
                        }}
                        >
                          Add to Cart
                        </Link>
                      </div>
                      <div className="block2-txt flex-w flex-t p-t-14">
                        <div className="block2-txt-child1 flex-col-l ">
                          <Link
                            to="/product-detail"
                            state={{ product: products }}
                            className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                          >
                            {products.title}
                          </Link>

                          <span className="stext-105 cl3">${products.price}</span>
                        </div>
                        {/* <Link to="#" className="">
                          Cart
                        </Link> */}
                        <div className="block2-txt-child2 flex-r p-t-3">
                          <Link
                            to="#"
                            className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                          >
                            <img
                              className="icon-heart1 dis-block trans-04"
                              src={icon1}
                              alt="ICON"
                            />
                            <img
                              className="icon-heart2 dis-block trans-04 ab-t-l"
                              src={icon2}
                              alt="ICON"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          {/* Load more */}
          <div className="flex-c-m flex-w w-full p-t-45">
            <Link
              to="#"
              className="flex-c-m stext-101 cl5 size-103 bg2 bor1 hov-btn1 p-lr-15 trans-04"
            >
              Load More
            </Link>
          </div>
        </div>
      </div>
    </>

  );
};

export default ProductListing;
