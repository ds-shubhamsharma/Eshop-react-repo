import React from "react";
import product1 from "../assets/images/product-01.jpg";
import product2 from "../assets/images/product-02.jpg";
import product3 from "../assets/images/product-03.jpg";
import product4 from "../assets/images/product-04.jpg";
import product5 from "../assets/images/product-05.jpg";
import product6 from "../assets/images/product-06.jpg";
import product7 from "../assets/images/product-07.jpg";
import product8 from "../assets/images/product-08.jpg";
import product9 from "../assets/images/product-09.jpg";
import product10 from "../assets/images/product-10.jpg";
import product11 from "../assets/images/product-11.jpg";
import product12 from "../assets/images/product-12.jpg";
import product13 from "../assets/images/product-13.jpg";
import product14 from "../assets/images/product-14.jpg";
import product15 from "../assets/images/product-15.jpg";
import product16 from "../assets/images/product-16.jpg";
import icon1 from "../assets/images/icons/icon-heart-01.png";
import icon2 from "../assets/images/icons/icon-heart-02.png";
function RelatedProduct() {
  return (
    <>
      <section className="sec-relate-product bg0 p-t-45 p-b-105">
        <div className="container">
          <div className="p-b-45">
            <h3 className="ltext-106 cl5 txt-center">Related Products</h3>
          </div>
          
          {/* Slide2 */}
          <div className="wrap-slick2">
            <div className="slick2">
              <div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
                {/* Block2 */}
                <div className="block2">
                  <div className="block2-pic hov-img0">
                    <img src={product1} alt="IMG-PRODUCT" />
                    <a
                      href="#"
                      className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                    >
                      Quick View
                    </a>
                  </div>
                  <div className="block2-txt flex-w flex-t p-t-14">
                    <div className="block2-txt-child1 flex-col-l ">
                      <a
                        href="#"
                        className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                      >
                        Esprit Ruffle Shirt
                      </a>
                      <span className="stext-105 cl3">$16.64</span>
                    </div>
                    <div className="block2-txt-child2 flex-r p-t-3">
                      <a
                        href="#"
                        className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                      >
                        <img
                          className="icon-heart1 dis-block trans-04"
                          src={icon1}
                          alt="ICON"
                        />
                        <img
                          className="icon-heart2 dis-block trans-04 ab-t-l"
                          src="images/icons/icon-heart-02.png"
                          alt="ICON"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
                {/* Block2 */}
                <div className="block2">
                  <div className="block2-pic hov-img0">
                    <img src={product2} alt="IMG-PRODUCT" />
                    <a
                      href="#"
                      className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                    >
                      Quick View
                    </a>
                  </div>
                  <div className="block2-txt flex-w flex-t p-t-14">
                    <div className="block2-txt-child1 flex-col-l ">
                      <a
                        href="#"
                        className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                      >
                        Herschel supply
                      </a>
                      <span className="stext-105 cl3">$35.31</span>
                    </div>
                    <div className="block2-txt-child2 flex-r p-t-3">
                      <a
                        href="#"
                        className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                      >
                        <img
                          className="icon-heart1 dis-block trans-04"
                          src={icon1}
                          alt="ICON"
                        />
                        <img
                          className="icon-heart2 dis-block trans-04 ab-t-l"
                          src="images/icons/icon-heart-02.png"
                          alt="ICON"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
          
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default RelatedProduct;
